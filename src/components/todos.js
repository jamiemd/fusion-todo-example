import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newTodo = this.state.value;
    const todoArray = this.state.todos;
    todoArray.push(newTodo);
    this.setState({ todos: todoArray });
  };

  handleCrossOff = event => {
    // console.log("event", event);
    // this.setState({
    //   todos: this.state.todos.slice()
    // });
    // console.log("this.state.todos", this.state.todos);
  };

  handleDelete = event => {
    console.log(" this.state.todos", this.state.todos);
    console.log("event.target.value", event.target.value);
    let index = this.state.todos.indexOf(event.target.value);
    console.log("index", index);
    let updatedArray = this.state.todos;
    updatedArray.splice(index, 1);
    console.log("updatedArray", updatedArray);
    this.setState({ todos: updatedArray });
  };

  render() {
    // console.log("this.state", this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="add a new todo..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="list-container">
          {Object.keys(this.state.todos).map((x, i) => (
            <div className={todo} key={i}>
              <div
                onClick={() => {
                  this.handleCrossOff(todo);
                }}
              >
                {this.state.todos[x]}
              </div>
              <button value={this.state.value[x]} onClick={this.handleDelete}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const todo = {
  display: "flex"
};

export default Todos;
