import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="content">
      <p onClick={props.delete}>
        Hi, I'm {props.name} and I am {props.age} years old
      </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
