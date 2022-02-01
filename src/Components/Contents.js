import React from "react";

const Part = ({ p, e }) => {
    return (
      <div>
        <p>{p} {e}</p>
      </div>
    )
  }

const Contents = ({parts}) => {
    return (
        <>
        <Part p={parts[0].name} e={parts[0].exercises}/>
        <Part p={parts[1].name} e={parts[1].exercises}/>
        <Part p={parts[2].name} e={parts[2].exercises}/>
        </>
    )
  }
export default Contents