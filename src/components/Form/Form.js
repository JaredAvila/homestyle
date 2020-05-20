import React from "react";
import Input from "./Input/Input";
import * as styles from "./Form.module.scss";

const Form = (props) => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      {props.inputList.map((item) => {
        return (
          <Input
            key={item.label}
            inputConfig={item.inputConfig}
            labelConfig={item.labelConfig}
            label={item.label}
          />
        );
      })}
    </form>
  );
};

export default Form;
