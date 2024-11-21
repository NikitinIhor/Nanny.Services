import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import sprite from "../../images/sprite.svg";
import css from "./AuthForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "min 3")
    .max(20, "max 20")
    .required("name is required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("email is required"),
  password: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("password is required"),
});

interface AuthFormProps {
  login?: boolean;
  registration?: boolean;
  handleCloseModal: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  login,
  registration,
  handleCloseModal,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (
    // values: typeof initialValues,
    _: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      {login && (
        <div className={css.header}>
          <h2>Log In</h2>
          <p>
            Welcome back! Please enter your credentials to access your account
            and continue your babysitter search.
          </p>
        </div>
      )}
      {registration && (
        <div className={css.header}>
          <h2>Registration</h2>
          <p>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </p>
        </div>
      )}
      <button onClick={handleCloseModal} className={css.close}>
        <svg width={36} height={36}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          {registration && (
            <div className={css.container}>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>
          )}

          <div className={css.container}>
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>

          <div className={`${css.container} ${css.password}`}>
            <Field
              className={css.field}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
            <button
              onClick={() => handleShowPassword()}
              className={css.icon}
              type="button"
            >
              {showPassword ? (
                <svg width={20} height={20}>
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              ) : (
                <svg width={20} height={20}>
                  <use href={`${sprite}#icon-eye`}></use>
                </svg>
              )}
            </button>
          </div>

          <button className={css.btn} type="submit">
            {login ? "Log In" : "Sign Up"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
