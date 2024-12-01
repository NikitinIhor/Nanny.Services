import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import sprite from "../../images/sprite.svg";
import css from "./ContactForm.module.css";

interface ContactFormProps {}

interface formValues {
  address: string;
  phone: string;
  age: string;
  time: string;
  email: string;
  name: string;
  comment: string;
}

const initialValues = {
  address: "",
  phone: "",
  age: "",
  time: "",
  email: "",
  name: "",
  comment: "",
};

const FeedbackSchema = Yup.object().shape({
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("address is required!"),
  phone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
      "Must be a valid phone number!"
    )
    .required("phone is required!"),
  age: Yup.number()
    .min(0, "Age must be at least 0!")
    .max(16, "Age must be less than 16!")
    .required("Age is required!"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("email is required!"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required!"),
  comment: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("comment is required!"),
});

const meetingList = ["09 : 00", "09 : 30", "10 : 00", "10 : 30"];

const ContactForm: React.FC<ContactFormProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("00 : 00");
  const navigate = useNavigate();

  const handleChangeValue = (newValue: string) => {
    setValue(newValue);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (_: formValues, actions: any) => {
    actions.resetForm();
    navigate("/");
    toast.success("Contact form has been seccessfully sent", {
      duration: 4000,
      position: "top-right",
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <Field
            className={css.field}
            type="text"
            name="address"
            placeholder="Address"
          />
          <ErrorMessage className={css.error} name="address" component="span" />
        </div>

        <div className={css.container}>
          <Field
            className={css.field}
            type="text"
            name="phone"
            placeholder="+380"
          />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>

        <div className={css.container}>
          <Field
            className={css.field}
            type="number"
            name="age"
            placeholder="Child's age"
          />
          <ErrorMessage className={css.error} name="age" component="span" />
        </div>

        <div className={css.container}>
          <Field className={css.field} type="text" name="time" value={value} />
          <button onClick={handleOpen} className={css.clock_btn} type="button">
            <svg className={css.icon_clock} width={20} height={20}>
              <use href={`${sprite}#icon-clock`}></use>
            </svg>
          </button>
          <div className={`${css.meeting} ${isOpen ? css.isOpen : ""}`}>
            <p>Meeting time</p>
            <ul className={css.list}>
              {meetingList.map((el, index) => (
                <li className={css.item} key={index}>
                  <button onClick={() => handleChangeValue(el)} type="button">
                    {el}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={css.container}>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.container}>
          <Field
            className={css.field}
            type="string"
            name="name"
            placeholder="Father's or mother's name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.container}>
          <Field
            className={css.field}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
        </div>
        <div className={css.btn}>
          <button className={css.btn}>Send</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
