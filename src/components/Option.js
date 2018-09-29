import React from "react";

const Option = props => {
  const { optionText, handleDeleteOption, index } = props;
  return (
    <div className="option">
      <p className="option__text">
        {index}.{optionText}
      </p>
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
