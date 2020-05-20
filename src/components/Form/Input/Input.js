import React, { Fragment } from "react";
import * as styles from "./Input.module.scss";

const Input = (props) => {
  let inputMarkup = (
    <Fragment>
      <label {...props.labelConfig}>{props.label}</label>
      <input {...props.inputConfig} />
    </Fragment>
  );
  console.log(props.label);
  if (!props.label) {
    console.log("this should have worked");
    inputMarkup = <input {...props.inputConfig} className={styles.button} />;
  }
  return inputMarkup;
};

export default Input;
