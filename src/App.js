import Todo from "./components/Todo";

function App() {
  return (
    //Note - the code written here is not HTML
    <div>
      <h1>My Todos</h1>
      
      {/* here we are passing the custom text heading for each todo */}
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Explore the full React course' />
    </div>
  );
}

export default App;
