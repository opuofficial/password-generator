import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import toast from "react-hot-toast";

const PasswordDisplay = ({ password }) => {
  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    toast.success("Copied!");
  };

  return (
    <div className="flex justify-between bg-slate-800 p-5 text-lg">
      <span className="font-semibold">{password}</span>
      <Tooltip title="Copy">
        <FontAwesomeIcon
          icon={faCopy}
          onClick={copyToClipboard}
          className="cursor-pointer"
        />
      </Tooltip>
    </div>
  );
};

export default PasswordDisplay;
