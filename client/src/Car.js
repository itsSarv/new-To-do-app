import React from "react";

export default function Car({ color, cars }) {
  const shoot = (name) => {
    alert(`Goal.... By, ${name}`);
  };

  return (
    <div>
      Car is of {color} color
      <br />
      <input type="text" id="name" placeholder="Write your name" />
      <button onClick={() => shoot(document.getElementById("name").value)}>
        shoot
      </button>
      <br />
      {cars && cars.length > 0 && <>I have {cars.length} cars</>}
    </div>
  );
}
