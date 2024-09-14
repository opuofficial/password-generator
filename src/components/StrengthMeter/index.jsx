import React from "react";

const StrengthMeter = ({ passwordStrength }) => {
  return (
    <div className="text-sm bg-slate-950 text-slate-400 flex justify-between items-center mt-3 rounded-md p-3 uppercase">
      <span>Strength</span>
      <span>{passwordStrength}</span>
    </div>
  );
};

export default StrengthMeter;
