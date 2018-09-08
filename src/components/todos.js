import React, { Component } from "react";
import { connect } from "react-redux";

import { submitTodo, deleteTodo } from "../actions/todos";

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
    this.props.submitTodo(todoArray);
  };

  handleCrossOff = event => {
    // console.log("event", event);
    // this.setState({
    //   todos: this.state.todos.slice()
    // });
    // console.log("this.state.todos", this.state.todos);
  };

  handleDelete = index => {
    let updatedArray = this.state.todos;
    updatedArray.splice(index, 1);
    this.props.deleteTodo(updatedArray);
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="add a new todo..."
            value={this.props.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="list-container">
          {Object.keys(this.props.todos).map((x, i) => (
            <div className={todo} key={i}>
              <div
                onClick={() => {
                  this.handleCrossOff(todo);
                }}
              >
                {this.props.todos[x]}
              </div>
              <button onClick={() => this.handleDelete(x)}>x</button>
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

const mapStateToProps = state => {
  // console.log("state in todos", state);
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  {
    submitTodo,
    deleteTodo
  }
)(Todos);
