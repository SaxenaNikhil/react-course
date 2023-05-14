import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

//a component in react is just a function
//Note - the name of the function should be in capital letters
function Todo(props) {
    //now to pickup the 'text' value from the app.js Todo component, so we will use props which will accept the parameters in our function component.

    //here props is a js object, where all the attributes added on the element are available as key value pair in this props object, where the attribute name 'text' will be the keys and 'Learn React', 'Master React' etc.. will be the values

    //This is a react hook and these can only be called directly in component functions, now calling useState creates a state that react is aware of.
    //Now we can give a starting value as an argument to the useState, which in this case is false because we want to control whether the modal / overlay is open or not, So to make it default close initially we gave it false value.
    //Now useState returns an array with exactly two elements as it always return an array with two elements which we can store this returned array in a constant or we use array destructuring two store these two elements, which here are modalIsOpen and setModalIsOpen
    //Here the first element 'modalIsOpen' which the useState returns which state returns in its array is the current state snapshot which here is the 'false' value in the modalIsOpen.
    //Here the second element 'setModalIsOpen' is a function that allows you to change that value because you dont change it by assigning a new value to 'modalIsOpen' but instead you always call this second function to assign a new value. Whenever we call this 'setModalIsOpen' which is a state changing function react will in the end re-execute component function to which state belongs and re-evaluate it and also update whats rendered on the screen.  
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler () {
        // console.log('Clicked!', props.text);
        //so in the deleteHandler we will call the setModalIsOpen will set it to true because we want the state to change on Delete button click which will change the 'modalIsOpen' state from false to true
        setModalIsOpen(true);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {/* importing modal and backdrop to app.js */}
            {/* now we will use modalIsOpen to conditionally render modal and backdrop component in the JSX code */}
            {/* here if the modalIsOpen is true then it will appear other wise it won't */}
            {/* { modalIsOpen ? <Modal /> : null } */}
            {/* here below using the && operator will check if both modalIsOpen and <Modal /> is true then second value will be returned */}
            { modalIsOpen && <Modal /> }
            { modalIsOpen && <Backdrop /> }
      </div>
    );
}

//this is used to make the function Todo available outside of this file and usable in other files
export default Todo;