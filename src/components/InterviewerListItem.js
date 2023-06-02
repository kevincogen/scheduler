import React from "react";
import "components/InterviewerListItem.scss"
import classNames from "classnames";

export default function InterviewerListItem(props) {

  let listClass = classNames("interviewers__item", {
    "interviewers__item--selected" : props.selected
  });

  return (
    <li onClick={event => props.setInterviewer(props.id)} className={listClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && <p>Slyvia Palmer</p>}
      </li>
  )
}