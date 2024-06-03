import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


export default function TodoForm() {

    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
        <div className="d-flex justify-content-end align-items-center">
            <button onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click" className="btn btn-warning ms-4"> Update </button>
            <button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click" className="btn btn-success ms-2"> Add </button>
        </div>
      </li>
    );
  }
  