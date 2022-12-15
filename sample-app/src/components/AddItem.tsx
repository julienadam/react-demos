import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Todo } from "../api/data-contracts";
import { api } from "./TodoContainer";

export function AddItem(props: {
  items: Todo[];
  setItems: (items: Todo[]) => void;
}): JSX.Element {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <input
        placeholder="What are you going to do ?"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }} />
      <Button variant='success'
        onClick={async () => {
          const item: Todo = { id: 0, title: name };
          let created = await api.todoCreate(item);
          props.setItems([...props.items, created.data]);
          setName("");
        }}
      >
        Add
      </Button>
    </div>
  );
}
