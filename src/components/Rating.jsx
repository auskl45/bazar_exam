import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = (props) => {
  const { value } = props;

  // Calcula la parte entera y decimal del valor
  const intValue = Math.floor(value);
  const decimalValue = value - intValue;

  // Crea un array con estrellas llenas hasta la parte entera
  const ratingArr = Array(intValue).fill(true);

  // Agrega una estrella media si hay un valor decimal mayor a 0
  if (decimalValue > 0) {
    ratingArr.push("half");
  }

  // Completa el array con estrellas vacías hasta llegar a 5
  while (ratingArr.length < 5) {
    ratingArr.push(false);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", color: "gold" }}>
      {ratingArr.map((item, index) => (
        item === true ? (
          <FaStar key={index} />
        ) : item === "half" ? (
          <FaStarHalf key={index} />
        ) : (
          <FaStar key={index} style={{ opacity: 0.5 }} />
        )
      ))}
    </div>
  );
};

export default Rating;
