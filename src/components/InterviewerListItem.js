import React from "react";
import "components/InterviewerListItem.scss"
import classNames from "classnames";

export default function InterviewerListItem(props) {

  let listClass = classNames("interviewers__item", {
    "interviewers__item--selected" : props.selected
  });

  return (
    <li className={listClass} onClick={props.onChange}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.value}
      />
      {props.selected && props.value}
    </li>
  );
}