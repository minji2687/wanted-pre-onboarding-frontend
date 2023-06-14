import http from "..";
import { TodoType } from "../../components/Todo";

export const getTodos = async () => {
  try {
    const data = await http.get("/todos");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postTodo = async (todoObj: TodoType) => {
  try {
    const data = await http.post("/todos", todoObj);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const data = await http.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (
  id: number,
  updateBody: { todo: string; isCompleted: boolean }
) => {
  try {
    const data = await http.put(`/todos/${id}`, updateBody);
    return data;
  } catch (error) {
    console.error(error);
  }
};
