import React,{useState} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {v4} from "uuid";

const TodoForm = ({addTodos}) =>{
  const[todoString , setTodoString] = useState("");

  const handleSubmit = e =>{
      e.preventDefault()
      if(todoString === ""){
          return alert("Enter any thing")
      }
      const todo = {            //this is the object containe two properties.   
          todoString,           //title is filled up with state (todoString)
          id :v4(),             //unique id generator with the help of uuid
      }

      addTodos(todo)             //this is a prop (user pass a prop)
      setTodoString("")          //updated todo (updated todo is empty ) till user enter some thing new todo.    
  }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter todo"
                        value={todoString}
                        onChange={e =>(setTodoString(e.target.value))}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button 
                            color="warning"
                            >Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default TodoForm;