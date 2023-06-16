import React, { useLayoutEffect } from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {

  return (
    <ul>
      {props.days.map(day => (
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={props.value === day.name}
          setDay={props.onChange} //may need to pass something into setDay?
        />
      ))}
    </ul>
  );
}