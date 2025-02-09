import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "cleaning",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "game",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  //id 값 설정
  const idRef = useRef(3);

  // 데이터 추가
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼다.

    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const onDelete = (targetId) => {
    // todos 배열에서 targetId와 일치하는 id를 갖는 요소를 삭제한 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  );
}

export default App;
