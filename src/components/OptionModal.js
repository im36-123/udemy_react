import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
const OptionModal = props => {
  const { selectedOption } = props;
  return (
    <ReactModal
      isOpen={!!selectedOption}
      contantLabel="Selected Option"
      onRequestClose={props.handleClearSelectedOption}
    >
      <h3>Selected Option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}>Okey</button>
    </ReactModal>
  );
};

export default OptionModal;
