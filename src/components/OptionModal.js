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
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {selectedOption && <p className="modal_body">{selectedOption}</p>}
      <button className="button" onClick={handleClearSelectedOption}>
        Okey
      </button>
    </ReactModal>
  );
};

export default OptionModal;
