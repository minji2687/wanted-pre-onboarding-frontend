import React, { useState, useEffect } from "react";
import { getTodos, postTodo } from "../api/todos";
import TodoItem from "./TodoItem";
import { Navigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);
  const [newTodo, setNewTodo] = useState({
    id: lastTodoId,
    todo: "",
    isCompleted: false,
    userId: 1,
  });

  const didMount = async () => {
    const { data } = await getTodos();
    setTodoList(data);
    setLastTodoId(data[data.length - 1]);
    setNewTodo({ ...newTodo, todo: "" });
  };

  useEffect(() => {
    didMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userInfo = localStorage.getItem("access_token");
  if (!userInfo) {
    return <Navigate to="/signin" />;
  }

  const handleSubmitTodo = async () => {
    try {
      const data = await postTodo(newTodo);
      console.log(data);
      if (data.status === 201) {
        didMount();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (e) => {
    setNewTodo({ ...newTodo, todo: e.target.value });
  };

  return (
    <Wrap>
      <h1>todo</h1>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} reload={didMount} />
        ))}
      </ul>
      <div className="new-todo-input">
        <input
          data-testid="new-todo-input"
          value={newTodo.todo}
          onChange={handleInputChange}
        />
        <button data-testid="new-todo-add-button" onClick={handleSubmitTodo}>
          추가
        </button>
      </div>
    </Wrap>
  );
};

export default Todo;

const Wrap = styled.div`
  h1 {
    color: #4461f2;
    font-weight: 400;
    margin-bottom: 50px;
  }
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f8f8f8;

  ul {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .new-todo-input {
    height: 30px;
    display: flex;

    input {
      width: 300px;
      height: 100%;
      padding: 14px 20px 14px 14px;
      background: #e5e5e7;
      border-radius: 10px;
      border: none;
      outline: none;
    }
    button {
      height: 56px;
      border: none;
      background-color: #4461f2;
      color: #fff;
      border-radius: 10px;
      margin-left: 12px;
      width: 65px;
      font-weight: bold;
    }
  }
`;
