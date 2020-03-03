import React, { Component } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";

class TodoList extends Component {
  state = {
    todos: [
      { id: 1, name: "Work" },
      { id: 2, name: "Play" },
      { id: 3, name: "Job" },
      { id: 4, name: "Money" }
    ]
  };

  render() {
    const { todos } = this.state;

    return (
      <Container>
        {console.log(todos.length)}
        <Button
          color="dark"
          className="mtb"
          onClick={() => {
            const name = prompt("Enter the Todo");
            if (name) {
              this.setState(state => ({
                todos: [...state.todos, { id: todos.length + 1, name }]
              }));
            }
          }}
        >
          Add Todo
        </Button>

        <ListGroup>
          {todos.map(({ id, name }) => (
            <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => {
                  this.setState(state => ({
                    todos: todos.filter(todo => todo.id !== id)
                  }));
                }}
              >
                &times;
              </Button>
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default TodoList;
