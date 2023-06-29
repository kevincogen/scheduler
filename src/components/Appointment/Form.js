import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { useState } from "react";

export default function Form(props) {
  console.log("form props", props)

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const [error, setError] = useState("");

 //reset student and interviewer
  const Reset = () => {
    setStudent("");
    setInterviewer(null);
  };

 //cancel function clears form 
  const Cancel = () => {
    Reset();
    props.onCancel();
  };

  function validate() {
    if (student === "") {
      setError("student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("please select an interviewer")
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={e => e.preventDefault()}>
        <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        onChange={(event) => setStudent(event.target.value)}
        value={student}
        data-testid="student-name-input"
        />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
        interviewers={props.interviewers}
        value={interviewer}
        onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={Cancel}>Cancel</Button>
        <Button confirm onClick={validate}>Save</Button>
      </section>
      </section>
    </main>
  )
};