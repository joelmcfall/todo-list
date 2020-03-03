import { combineReducers } from "redux";
import todoReducer from "../redux/todoReducer";

export default combineReducers({
  todo: todoReducer
});
