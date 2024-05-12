import { useDispatch } from "react-redux";

import { setCurrentContact } from "../../redux/contacts/slice";

import css from "./Contact.module.css";

const Contact = ({ id, name, number, openModalDelete, openModalEdit }) => {
  const dispatch = useDispatch();

  const currentContact = {
    id,
    name,
    number,
  };

  const handleBtnDelete = () => {
    dispatch(setCurrentContact(currentContact));

    openModalDelete();
  };

  const handleBtnEdit = () => {
    dispatch(setCurrentContact(currentContact));

    openModalEdit();
  };

  return (
    <div className={css.item}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <ul className={css.list_btn}>
        <li>
          <button className={css.btn} type="button" onClick={handleBtnEdit}>
            Edit
          </button>
        </li>
        <li>
          <button className={css.btn} type="button" onClick={handleBtnDelete}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
