import { Checkbox } from "antd";
import React from "react";

const Checkboxes = ({ includeNumber, includeSymbol, toggleCheckboxValue }) => {
  return (
    <div className="flex flex-col gap-2 my-5">
      <Checkbox checked={true} className="text-slate-200">
        Include Uppercase Letters
      </Checkbox>
      <Checkbox checked={true} className="text-slate-200">
        Include Lowercase Letters
      </Checkbox>
      <Checkbox
        checked={includeNumber}
        onChange={() => toggleCheckboxValue("number")}
        className="text-slate-200"
      >
        Include Numbers
      </Checkbox>
      <Checkbox
        checked={includeSymbol}
        onChange={() => toggleCheckboxValue("symbol")}
        className="text-slate-200"
      >
        Include Symbols
      </Checkbox>
    </div>
  );
};

export default Checkboxes;
