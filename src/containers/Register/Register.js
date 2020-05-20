import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as styles from "./Register.module.scss";
import Form from "../../components/Form/Form";

const Register = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.history.push("/register/add_child");
  };

  const registerForm = [
    {
      label: "First Name",
      labelConfig: {
        htmlFor: "fName",
      },
      inputConfig: {
        placeholder: "James",
        type: "text",
        name: "fName",
      },
    },
    {
      label: "Last Name",
      labelConfig: {
        htmlFor: "lName",
      },
      inputConfig: {
        placeholder: "Bond",
        type: "text",
        name: "lName",
      },
    },
    {
      label: "Email",
      labelConfig: {
        htmlFor: "email",
      },
      inputConfig: {
        placeholder: "You@exapmle.com",
        type: "email",
        name: "email",
      },
    },
    {
      label: "Password",
      labelConfig: {
        htmlFor: "password",
      },
      inputConfig: {
        placeholder: "Enter a password",
        type: "password",
        name: "password",
      },
    },
    {
      label: "Confirm Password",
      labelConfig: {
        htmlFor: "password2",
      },
      inputConfig: {
        placeholder: "Confirm your password",
        type: "text",
        name: "fName",
      },
    },
    {
      label: false,
      inputConfig: {
        value: "Continue",
        type: "submit",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}></div>
      <div className={styles.formContainer}>
        <h5 className={styles.title}>Account Info</h5>
        <div className={styles.spacer}></div>
        <Form inputList={registerForm} onSubmit={onSubmitHandler} />
        {/* <form onSubmit={onSubmitHandler} className={styles.form}>
          <label htmlFor="fName">First Name</label>
          <input type="text" placeholder="James" name="fName" />
          <label htmlFor="lName">Last Name</label>
          <input type="text" placeholder="Bond" name="lName" />
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="You@example.com" name="email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="password2"
          />
          <input className={styles.button} type="submit" value="Continue" />
          <p>
            <Link to="/">Already have an account?</Link>
          </p>
        </form> */}
        <p>
          <Link to="/">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Register);
