import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
const OptionModal = props => {
  const { selectedOption, handleClearSelectedOption } = props;
  return (
    <ReactModal
      isOpen={!!selectedOption}
      contantLabel="Selected Option"
      onRequestClose={handleClearSelectedOption}
    >
      <h3>Selected Option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={handleClearSelectedOption}>Okey</button>
    </ReactModal>
  );
};

export default OptionModal;
