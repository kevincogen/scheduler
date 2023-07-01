import React from "react";
import "./styles.scss"

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Confirm from "./Confirm";
import Status from "./Status";
import Error from "./Error";

import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {
  if (props.interview) {
  }
  // Mode constants
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const CONFIRM ="CONFIRM";
  const SAVING = "SAVING"
  const DELETING = "DELETING";
  const EDIT = "EDIT"
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true))
  }

  function Delete() {
    // transition(DELETE)
    transition(DELETING, true);
    props.cancelInterview(props.id) 
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
    }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview}
          interviewers={props.interviewers}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back(EMPTY)}
          onSave={save} // Pass the save function to the Form component
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
          onCancel={back}
          onConfirm={Delete}
        />
      )}
      {mode === SAVING && <Status message={`Saving`} />}
      {mode === DELETING && <Status message={`Deleting`} />}
      {mode === EDIT && (
        <Form
        interviewers={props.interviewers}
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onCancel={() => back(SHOW)}
        onSave={save}
      />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment." onClose={back} />
      )}

      {mode === ERROR_DELETE && (
        <Error message="Could not cancel appointment." onClose={back} />
      )}
    </article>
  );
}



