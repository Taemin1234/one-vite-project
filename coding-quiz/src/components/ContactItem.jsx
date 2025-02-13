import "./ContactItem.css";
import { memo, useContext } from 'react'
import { ContactDispatchContext  } from "../App";
 
function ContactItem({ id, name, email }) {
  const { onDelete } = useContext(ContactDispatchContext);
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickDelete}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem)