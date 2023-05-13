//a component in react is just a function
//Note - the name of the function should be in capital letters
function Todo() {
    return (
        <div className="card">
            <h2>TITLE</h2>
            <div className="actions">
                <button className="btn">Delete</button>
            </div>
      </div>
    );
}

//this is used to make the function Todo available outside of this file and usable in other files
export default Todo;