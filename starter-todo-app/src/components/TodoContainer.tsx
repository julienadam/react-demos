import React, { Component } from "react";
import { TodoApi } from "../api/TodoApi";
import { Todo } from "../api/data-contracts";
import ListItems from "./ListItems";
import AddItem from "./AddItem";

export const api = new TodoApi({
  baseUrl: "http://localhost:5190",
});

class TodoContainer extends Component<{}, Todo[]> {

  setItems(items : Todo[]) {
    this.setState(items);
  }

  componentDidMount(): void {
    api.todoList().then(v => 
      this.setItems(v.data));
  }

  getItems() : Todo[] {
    return this.state.map((v, i) => {
      return {
      id: v.id,
      completed: v.completed,
      title: v.title,
      order: v.order
    }});
  }

  render(){
    return (
      <>
        <ListItems items={this.getItems()} />
        <AddItem items={this.getItems()} setItems={this.setItems} />
      </>
    );
  }
}

export default TodoContainer;
