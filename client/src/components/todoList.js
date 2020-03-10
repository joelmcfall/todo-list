import React, { Component } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getTodos, deleteTodo, addTodo } from "../actions/todoActions";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todo } = this.props.todo;

    console.log(this.props.todo.todo.length);

    return (
      <Container>
        <Button
          color="dark"
          className="mtb"
          onClick={() => {
            const name = prompt("Enter the Todo");
            if (name) {
              this.setState(state => ({
                todo: [...state.todo, { id: todo.length + 1, name }]
              }));
            }
          }}
        >
          Add Todo
        </Button>

        <ListGroup>
          {todo.map(({ id, name }) => (
            <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => {
                  this.setState(state => ({
                    todo: todo.filter(todo => todo.id !== id)
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

TodoList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, { getTodos, deleteTodo, addTodo })(
  TodoList
);
