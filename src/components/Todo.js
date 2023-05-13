//a component in react is just a function
//Note - the name of the function should be in capital letters
function Todo(props) {
    //now to pickup the 'text' value from the app.js Todo component, so we will use props which will accept the parameters in our function component.

    //here props is a js object, where all the attributes added on the element are available as key value pair in this props object, where the attribute name 'text' will be the keys and 'Learn React', 'Master React' etc.. will be the values

    function deleteHandler () {
        // console.log('Clicked!', props.text);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
      </div>
    );
}

//this is used to make the function Todo available outside of this file and usable in other files
export default Todo;