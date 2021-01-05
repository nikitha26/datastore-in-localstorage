import React,{useState,useEffect} from 'react';
import {Container,Input,Row} from "reactstrap"
import './App.css';

import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";

const App = () =>{

  const[todos , setTodos] = useState([])
 
  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if (localTodos) {
       setTodos(JSON.parse(localTodos))
    }
  } , []);


    const addTodos = async todo =>{
        setTodos([...todos,todo])
    }

    useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos))
    } , [todos] )

    const markComplete = id =>{
      setTodos(todos.filter(todo => todo.id !==id))
    }
    const edittodo = (id) =>{
       setTodos(todos.filter(todo => todo.id=id))
      return(
        <Input type="text"
        id="todo"
        name="todo"
        placeholder="Edit todo"/>
      )
    }
   
  return(
    <Container>
      
        <h1>TODO APP (React.js)</h1>
        <Todo todos={todos} markComplete={markComplete}/>
        <TodoForm addTodos={addTodos}/>
     
    </Container>  
  )
}

export default App;
