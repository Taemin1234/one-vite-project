import "./ContactEditor.css";
import { useState, useRef, useContext } from "react";
import { ContactDispatchContext } from '../App'

export default function ContactEditor() {
  const { onCreate } = useContext(ContactDispatchContext );
  const [content, setContent] = useState({
    name:'',
    email:''
  })
  const nameRef = useRef();
  const emailRef = useRef();

  const onChange =(e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    if (content.name == "" || content.email =="") {
      
      if(content.name == "") {
        nameRef.current.focus();
      } else {
        emailRef.current.focus();
      }
      return;
    }

    onCreate(content.name, content.email);
    setContent({
      name:'',
      email:''
    })
  }

  const onKeydown = (e) => {
    if (e.keyCode == 13) {
      onSubmit();
    }
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input ref={nameRef} value={content.name} onChange={onChange} onKeyDown={onKeydown} name="name" className="name" placeholder="이름 ..." />
        <input ref={emailRef} value={content.email} onChange={onChange} onKeyDown={onKeydown} name="email" className="contact" placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
