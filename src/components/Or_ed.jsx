import React from "react";

function Ordered({ newOrdered, setNewOrdered }) {
  const [ordered, setOrdered] = React.useState();
  console.log(newOrdered);
  const result = newOrdered.map((ordered, index) => {
    return (
      <div className="drink">
        <p>{ordered.id}</p>
        <p>{ordered.status}</p>
        <p>{ordered.name}</p>
      </div>
    );
  });
  return(
    <div>jdbcbhd</div>
  )
}
