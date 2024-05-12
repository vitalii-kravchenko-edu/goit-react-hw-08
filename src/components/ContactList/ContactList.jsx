import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";

const ContactList = ({ openModalDelete, openModalEdit }) => {
  const filteredContacs = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacs.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            openModalDelete={openModalDelete}
            openModalEdit={openModalEdit}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
