import React, { useEffect, useState } from "react";
import { updateTodo, deleteTodo } from "../api/todos";
/** @jsxImportSource @emotion/react */
import  styled  from '@emotion/styled'

const TodoItem = ({ todo, reload }) => {
  const [mode, setMode] = useState("read");
  const [updateInputValue, setUpdateInputValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setUpdateInputValue(todo.todo);
    setIsCompleted(todo.isCompleted);
  }, [todo]);

  const handleChangeMode = (mode) => {
    setMode(mode);
  };

  const onUpdateSubmit = async () => {
    const updateBody = {
      todo: updateInputValue,
      isCompleted,
    };
    await updateTodo(todo.id, updateBody);
    reload();
    setMode("read");
  };

  const handleUpdateInput = (e) => {
    setUpdateInputValue(e.target.value);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    reload();
  };

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    console.log(isChecked);
    setIsCompleted(isChecked);
  };

  return (
    <TodoItemWrap>
      {mode === "read" ? (
        <>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              checked={isCompleted}
              onChange={handleCheckbox}
            />
            <span>{todo.todo}</span>
          </label>
           <div className="button-wrap">
            <button
              data-testid="modify-button"
              className="modify-button"
              onClick={() => handleChangeMode("update")}
            >
              수정
            </button>
            <button data-testid="delete-button" className="delete-button" onClick={handleDelete}>
              삭제
          </button>
          </div>
        </>
      ) : (
        <>
          <input
                className="modify-input"
                data-testid="modify-input"
                value={updateInputValue}
                onChange={handleUpdateInput}
          />
       
        <div className="button-wrap">
          <button data-testid="submit-button" className="submit-button" onClick={onUpdateSubmit}>
            제출
          </button>
          <button
            data-testid="cancel-button"
            className="cancel-button"
            onClick={() => handleChangeMode("read")}
          >
            취소
          </button>
        </div>
        </>
      )}
    </TodoItemWrap>
  );
};

export default TodoItem;

const TodoItemWrap = styled.li`
    background: #FFFFFF;
    border-radius: 8px;
    height: 49px;
    align-items: center;
    margin-bottom:12px;
    display: flex;
    justify-content: space-between;
    width:100%;
    padding-left:none;
    padding:0.3rem;
    font-size: 14px;
     label{
       display: flex;
       align-items: center;
     }
    .checkbox{
      margin:0 10px;
    }
    .button-wrap{
      button{
        height:35px;
        margin-right:10px;
        width:50px;
        border:none;
        border-radius:4px;
      }
      .modify-button{
        background-color: #68D18C;
        color:#fff;
      }
      .submit-button{
        background-color: #FF4949;
        color:#fff;
      }
    }
    .modify-input{
      width:55%;
      height:55%;
      border:none;
      margin-left:20px;
      font-size: 14px;
      outline: none;
      background: none;
      border-bottom:1px solid #000;
    }
`
