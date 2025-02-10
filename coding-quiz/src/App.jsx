import "./App.css";
import { useState, useRef, useReducer } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  {
    id: 0,
    name: '이정환',
    email: "king199777@gmail.com",
  },
  {
    id: 1,
    name: '손흥민',
    email: "hmson@gmail.com",
  },
  {
    id: 2,
    name: '아이유',
    email: "Iu@gmail.com",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contactInfo, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name : name,
        email: email,
      },
    });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contactInfo={contactInfo} />
      </section>
    </div>
  );
}

export default App;
