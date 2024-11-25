import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
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
    .min(18, "Age must be at least 18!")
    .max(99, "Age must be less than 99!")
    .required("Age is required!"),
  time: Yup.string()
    .matches(
      /^([0-9]{1,2}):([0-9]{2})\s?(AM|PM)?$/i,
      "Must be a valid time (e.g., 10:30 AM)!"
    )
    .required("Time is required!"),
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

const ContactForm: React.FC<ContactFormProps> = () => {
  const handleSubmit = (_: formValues, actions: any) => {
    // _ ===values
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
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
            <ErrorMessage
              className={css.error}
              name="address"
              component="span"
            />
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
            <Field
              className={css.field}
              type="text"
              name="time"
              placeholder="00:00"
            />
            <ErrorMessage className={css.error} name="time" component="span" />
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
            <ErrorMessage
              className={css.error}
              name="comment"
              component="span"
            />
          </div>
          <div className={css.btn}>
            <button className={css.btn}>Send</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
