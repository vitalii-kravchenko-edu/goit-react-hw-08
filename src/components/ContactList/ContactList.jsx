import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contactsSlice";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacs = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacs.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
