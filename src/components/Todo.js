import Modal from "./Modal";
import { useState } from "react";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [ modalIsOpen, setModalIsopen ] = useState(false);

  function deleteHandler() {
    setModalIsopen(true);
  }

  function closeModalHandler() {
    setModalIsopen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler}/> }
      
    </div>
  );
}

export default Todo;