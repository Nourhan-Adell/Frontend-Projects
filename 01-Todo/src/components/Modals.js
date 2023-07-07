function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmedHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmedHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
