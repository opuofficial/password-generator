import { Slider } from "antd";
import React from "react";

const CharacterLength = ({ characterLength, setCharacterLength }) => {
  const handleSlider = (value) => {
    if (value >= 6) {
      setCharacterLength(value);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <span>Character Length</span>
        <span className="text-primary">{characterLength}</span>
      </div>
      <div className="mb-8">
        <Slider
          onChange={handleSlider}
          value={characterLength}
          max={16}
          tooltip={{ open: false }}
        />
      </div>
    </>
  );
};

export default CharacterLength;
