import React from "react";

const Dates = () => {
  const date = new Date();
  const year = date.getFullYear();
  const dateInYear = date.getDate();
  const month = date.getMonth();
  const combiner = dateInYear + "/" + month + "/" + year;

  return (
    <div className="data">
      <p>{combiner}</p>
    </div>
  );
};

export default Dates;
