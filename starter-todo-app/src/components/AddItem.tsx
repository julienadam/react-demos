import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Todo } from "../api/data-contracts";
import { api } from "./TodoContainer";

type TodosProps = { items: Todo[], setItems: (items: Todo[]) => void }

class AddItem extends Component<TodosProps, Todo> {

  constructor(props: TodosProps) {
    super(props);
    this.state = { id: 0, title : "", completed : false, order : 0}
  }

  setName(name: string) {
    this.setState({ id: this.state.id, title: name, completed: this.state.completed, order: this.state.order})
  }

  render() {
    return (
      <div>
        <input
          placeholder="What are you going to do ?"
          value={this.state.title ?? ""}
          onChange={(event) => {
            this.setName(event.target.value);
          }} />
        <Button variant='success'
          onClick={async () => {
            let created = await api.todoCreate(this.state);
            this.props.setItems([...this.props.items, created.data])
            this.setName("");
          }}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddItem