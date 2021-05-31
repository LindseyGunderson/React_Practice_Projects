import React, {useState} from "react";
import './App.css';

// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {


  // handle the users input
  const [inputText, setInputText] = useState("");

  // store our todos in an array of objets
  const [todos, setTodos] = useState([]);


  return (

    <div className="App">
    
    <header>
      <h1>Todo List</h1>
    </header>

    <Form todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList />
    
    </div>
  );
}

export default App;
