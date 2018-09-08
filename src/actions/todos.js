export const SUBMIT_TODO = "SUBMIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const submitTodo = array => {
  console.log("array", array);

  return {
    type: submitTodo,
    todos: array
  };
};

export const deleteTodo = updatedArray => {
  return {
    type: deleteTodo,
    todos: updatedArray
  };
};
