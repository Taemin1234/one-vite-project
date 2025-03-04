import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contactInfo, onDelete }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactInfo.map((ci) => {
        return <ContactItem {...ci} key={ci.id} onDelete={onDelete} />;
      })}
    </div>
  );
}
