import { ADD_TODO, GET_TODO, DELETE_TODO } from "../actions/types";

const initState = {
  todo: [
    { id: 1, name: "Work" },
    { id: 2, name: "Play" },
    { id: 3, name: "Job" },
    { id: 4, name: "Sarah" }
  ]
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state
      };
    case ADD_TODO: {
      break;
    }
    default:
      return {
        ...state
      };
  }
}
