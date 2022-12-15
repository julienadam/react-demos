import React, { useEffect, useState } from "react";
import { TodoApi } from "../api/TodoApi";
import { Todo } from "../api/data-contracts";
import ListItems from "./ListItems";
import { AddItem } from "./AddItem";

export const api = new TodoApi({
  baseUrl: "http://localhost:5190",
});

function TodoContainer(): JSX.Element {
  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const res = await api.todoList();
      setItems(res.data);
    })();
  }, []);

  return (
    <>
        <ListItems items={items} />
        <AddItem items={items} setItems={setItems} />
    </>
  );
}

export default TodoContainer;
