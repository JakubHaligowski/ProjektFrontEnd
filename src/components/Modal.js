function Modal(props) {

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={props.OnCancel}>Cancel</button>
      <button className='btn'onClick={props.OnConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;