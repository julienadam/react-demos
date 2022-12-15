import React, { Component } from "react";
import { Todo } from "../api/data-contracts";

class ListItems extends Component<{ items: Todo[]; }> {
  render() {
    return (
      <>
        <h3>Todo list</h3>
        {this.props.items.map((item, idx) => (
          <div
            key={idx}
            
          >
            <div>
              .{item.id} {item.title}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ListItems