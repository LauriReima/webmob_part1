import React from "react";
import Header from './Header'
import Contents from "./Contents";
import Total from "./Total";

const Courses = () => {
const course = {
    name: "Superadvanced web and mobile programming",
    parts: [
  {
    name: "Basics of React",
    exercises: 8
  },
  {
    name: "Using props",
    exercises: 10
  },
  {
    name: "Component states",
    exercises: 12
  }
  ]
}

return (
    <>
      <Header name={course.name}/>
      <Contents parts={course.parts}/>
      <Total parts={course.parts} /> 
    </>
  );
}
export default Courses