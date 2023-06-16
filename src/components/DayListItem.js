import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

// props.name 
// props.spots 
// props.selected
// props.DaySet
export default function DayListItem(props) {

  let listClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0),
  });

  const formatSpots = (spots) => {
    
    if (spots > 1) return `${props.spots} spots remaining`;
    if (spots === 1) return `1 spot remaining`;
    if (spots < 1) return `no spots remaining`; 

  }

  return (
    <li className={listClass} onClick={() => {props.setDay(props.name)}} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}