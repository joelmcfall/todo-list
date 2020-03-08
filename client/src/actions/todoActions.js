import { ADD_TODO, GET_TODO, DELETE_TODO } from "./types";

export const getTodos = () => {
  return {
    type: GET_TODO
  };
};

export const addTodo = () => {
  return {
    type: ADD_TODO
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO
  };
};
