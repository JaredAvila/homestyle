import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as styles from "./Register.module.scss";

const Register = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.history.push("/register/add_child");
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}></div>
      <div className={styles.formContainer}>
        <h5 className={styles.title}>Account Info</h5>
        <div className={styles.spacer}></div>
        <form onSubmit={onSubmitHandler} className={styles.form}>
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
        </form>
      </div>
    </div>
  );
};

export default withRouter(Register);
