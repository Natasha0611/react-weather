import React from "react";
import Day from "./Day";


export default function Days(props) {
  return (
    <div className="Days">
      {props.days.map((day, index) => {
        return (
          <p key={index}>
            <Day day={day} />
          </p>
        );
      })}
      </div>
  );
}