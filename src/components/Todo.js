import React from "react";

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";

/* カスタムフック */
import useFbStorage from "../hooks/fbStorage";

function Todo() {
  const [items, addItem, updateItem, clearItems] = useFbStorage();

  const [filter, setFilter] = React.useState("ALL");

  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
    return null;
  });

  const handleCheck = (checked) => {
    updateItem(checked);
  };

  const handleAdd = (text) => {
    addItem({ text, done: false });
  };

  const handleFilterChange = (value) => setFilter(value);

  return (
    <article className="panel is-danger">
      <div className="panel-heading">
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-calendar-check"></i>
          </span>
          <span> ITSS Todoアプリ</span>
        </span>
      </div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
      {displayItems.map((item) => (
        <TodoItem key={item.id} item={item} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{displayItems.length} items</div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </article>
  );
}

export default Todo;
