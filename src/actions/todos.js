export const SUBMIT_TODO = "SUBMIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const submitTodo = () => {
  return {
    type: submitTodo
  };
};

export const deleteTodo = () => {
  return {
    type: deleteTodo
  };
};
