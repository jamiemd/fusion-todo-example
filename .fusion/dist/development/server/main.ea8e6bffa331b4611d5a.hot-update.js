if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/fusion-todo-example/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Todos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => {
      this.setState({
        value: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      const newTodo = this.state.value;
      const todoArray = this.state.todos;
      todoArray.push(newTodo);
      this.setState({
        todos: todoArray
      });
    });

    _defineProperty(this, "handleCrossOff", event => {// console.log("event", event);
      // this.setState({
      //   todos: this.state.todos.slice()
      // });
      // console.log("this.state.todos", this.state.todos);
    });

    _defineProperty(this, "handleDelete", index => {
      console.log(" this.state.todos", this.state.todos);
      console.log("index", index); // let index = this.state.todos.indexOf(event.target.value);
      // let updatedArray = this.state.todos;
      // updatedArray.splice(index, 1);
      // console.log("updatedArray", updatedArray);
      // this.setState({ todos: updatedArray });
    });

    this.state = {
      todos: [],
      value: ""
    };
  }

  render() {
    // console.log("this.state", this.state);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "todo",
      placeholder: "add a new todo...",
      value: this.state.value,
      onChange: this.handleChange
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit"
    }, "Submit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list-container"
    }, Object.keys(this.state.todos).map((x, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: todo,
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => {
        this.handleCrossOff(todo);
      }
    }, this.state.todos[x]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handleDelete(x)
    }, "x")))));
  }

}

const todo = {
  display: "flex"
};
/* harmony default export */ __webpack_exports__["default"] = (Todos);

/***/ })

};
//# sourceMappingURL=main.ea8e6bffa331b4611d5a.hot-update.js.map