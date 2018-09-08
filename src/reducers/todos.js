import { SUBMIT_TODO, DELETE_TODO } from "../actions/todos";

const initialState = {
  todos: [],
  value: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_TODO:
      return {
        ...state,
        ...action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
