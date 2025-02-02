import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("off");

  return (
    <div>
      {light === "on" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "lightgray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "off" ? "on" : "off");
        }}
      >
        {light === "off" ? "켜기" : "끄기"}
      </button>
    </div>
  );
};

export default Bulb;
