import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색어와 내용 비교
  const getFilterdData = () => {
    if (search == "") {
      return todos;
    } else {
      return todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  const filterdTodos = getFilterdData();

  return (
    <div className="list">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todo_wrapper">
        {filterdTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
