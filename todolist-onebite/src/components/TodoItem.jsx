import "./TodoItem.css";
import {memo} from 'react'

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>Delete</button>
    </div>
  );
};

export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라 props가 바뀌었는지 안바뀌었는지 판단
  // T -> props가 바뀌지 않음 -> 리랜더링X
  // F -> props가 바뀜 -> 리랜더링 o
  // 리랜더링이 안되면 메모가 동작

  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;

  return true
});
