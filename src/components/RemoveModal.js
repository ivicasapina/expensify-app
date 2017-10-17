import React, { Component } from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
  <Modal
    isOpen={props.removeRequested}
    contentLabel="Remove Expense"
    onRequestClose={props.handleCancel}
    closeTimeoutMS={300}
    className="modal"
  >
    <h3 className="modal__title">Remove this expense?</h3>
    <div className="modal__buttons">
      <button
        className="button button--danger"
        onClick={props.handleRemove}
      >
        Remove
    </button>

      <button
        className="button button--secondary"
        onClick={props.handleCancel}
      >
        Cancel
    </button>
    </div>
  </Modal>
);

export default RemoveModal;