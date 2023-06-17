import React, { useState } from "react";

import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "")
  const [interviewer, setInterviewer] = useState(props.interveiwer || "")

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
        />
        </form>
        <InterviewerList

        interviewers={props.interviewers}
        value={interviewer}
        onChange={setInterviewer}

        />
      </section>
      <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={Cancel}>Cancel</Button>
        <Button onClick={props.onSave} >Save</Button>
      </section>
      </section>
    </main>
  )
};