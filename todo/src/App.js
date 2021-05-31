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

  const [status, setStatus] = useState('all');


  return (

    <div className="App">
    
    <header>
      <h1>Todo List</h1>
    </header>

    <Form inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}/>
    <TodoList setTodos={setTodos} todos={todos}/>
    
    </div>
  );
}

export default App;
