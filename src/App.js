import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Finish the university'/>
      <Todo text='Find a job'/>
      <Todo text='Take care of a cat'/>
    </div>
  );
}

export default App;
