import React from "react";
import "components/InterviewerListItem.scss"
import classNames from "classnames";

export default function InterviewerListItem(props) {

  let listClass = classNames("interviewers__item", {
    "interviewers__item--selected" : props.selected
  });

  return (
    <li onClick={() => {props.setInterviewer(props.id)}} className={listClass}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      {props.selected && <p>Slyvia Palmer</p>}
      </li>
  )
}