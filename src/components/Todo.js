import { useState } from "react"
import Modal from "./Modal";
import Backdrops from "./Backdrops";

const Todo = (props) => {
   const[ modalisOpen, setModalIsOpen ] = useState(false);

   function deleteHandler() {
       setModalIsOpen(true);
    }
    return (
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='action'> 
            <button className='btn' onClick={deleteHandler }>Delete</button>
          </div>
          { modalisOpen ? <Modal /> : null }
          { modalisOpen ? <Backdrops /> : null }
          <Modal />
          <Backdrops />
        </div>
    )
}

export default Todo
