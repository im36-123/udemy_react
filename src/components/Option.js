import React from "react";

const Option = props => {
  const { optionText, handleDeleteOption } = props;
  return (
    <div>
      {optionText}
      <button
        className="button button--link"
        onClick={e => {
          handleDeleteOption(optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
