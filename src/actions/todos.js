export const SUBMIT_TODO = "SUBMIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const submitTodo = array => {
  return {
    type: SUBMIT_TODO,
    payload: array
  };
};

export const deleteTodo = updatedArray => {
  return {
    type: DELETE_TODO,
    payload: updatedArray
  };
};
