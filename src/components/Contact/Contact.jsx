import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleCLickDeleteBtn = () => {
    const contactId = id;
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.item}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={handleCLickDeleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
