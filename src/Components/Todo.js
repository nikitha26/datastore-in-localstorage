import React, { useContext } from "react";
import {Input, ListGroup,ListGroupItem} from "reactstrap";
import {FaCheckDouble,FaPen} from "react-icons/fa";

const Todo = ({todos,markComplete}) =>{
  
    return(
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo =>(
                <ListGroupItem key={todo.id}> 
                    <input type="text" id={todo.id}
                    value={todo.todoString}
                    />
                           
                   <span className="float-right"
                        onClick={() => markComplete(todo.id)}> 
                        <FaCheckDouble/>
                   </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
export default Todo;