import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/htg_logo-no-text.png";
import * as styles from "./Auth.module.scss";

const Auth = (props) => {
  const onSubmitHandler = () => {
    props.history.push("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Homestyle Gymnastics</h1>
        <img className={styles.logo} src={Logo} alt="Homestyle Gymnastics" />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="You@example.com" name="email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <input className={styles.button} type="submit" value="Sign In" />
          <p>
            <a href="/">Forgot username/password?</a>
          </p>
        </form>
      </div>
      <p className={styles.register}>
        Don't have an account?{" "}
        <Link className={styles.regBtn} to="/register">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default withRouter(Auth);
