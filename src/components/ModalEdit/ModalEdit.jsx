import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import clsx from "clsx";
import toast from "react-hot-toast";

import { editContact } from "../../redux/contacts/operations";
import { selectCurrentContact } from "../../redux/contacts/selectors";

import css from "./ModalEdit.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(57, 55, 55, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const ModalEdit = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editContact({
        id: currentContact.id,
        name: inputValue,
        number: currentContact.phone,
      })
    );
    setInputValue("");
    onRequestClose();
    toast.success("This contact is edited successfully");
  };

  const rejectEdit = () => {
    onRequestClose();
    setInputValue("");
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Modal"
      >
        <div>
          <form className={css.form} onSubmit={onEditFormSubmit}>
            <label className={css.form_label}>
              <span>Enter new value:</span>
              <input
                type="text"
                placeholder="Enter edited name"
                value={inputValue}
                onChange={handleChange}
                className={css.form_input}
                required
              />
            </label>

            <ul className={css.btn_list}>
              <li>
                <button className={clsx(css.btn, css.confirm)} type="submit">
                  Confirm edit contact
                </button>
              </li>
              <li>
                <button
                  className={clsx(css.btn, css.regect)}
                  type="button"
                  onClick={rejectEdit}
                >
                  Close without editing
                </button>
              </li>
            </ul>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEdit;
