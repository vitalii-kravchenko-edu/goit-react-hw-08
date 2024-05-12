import { useDispatch } from "react-redux";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const initialContactValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = values;
    dispatch(addContact(newContact));
    onSubmit();
    toast.success("New contact added");

    actions.resetForm();
  };

  const contactFormSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .trim(),
    number: Yup.string()
      .matches("^\\d{3}-\\d{3}-\\d{4}$", "Number format is: xxx-xxx-xxxx")
      .required("Required")
      .trim(),
  });

  return (
    <div>
      <Formik
        initialValues={initialContactValues}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.closeBtn}>
            <button
              type="button"
              onClick={() => {
                onSubmit();
              }}
            >
              ⨉
            </button>
          </div>
          <label>
            <span>Name</span>
            <br />
            <Field type="text" name="name" placeholder="Name and Lastname" />
            <ErrorMessage component="p" name="name" />
          </label>
          <label>
            <span>Number</span>
            <br />
            <Field type="tel" name="number" placeholder="xxx-xxx-xxxx" />
            <ErrorMessage component="p" name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
