import React from "react";
import * as styles from "./Input.module.scss";
import AddIcon from "@material-ui/icons/Add";
import ReplayIcon from "@material-ui/icons/Replay";
import Button from "../../Button/Button";

const Input = (props) => {
  let inputMarkup = (
    <div className={styles.inputContainer}>
      <label {...props.item.labelConfig}>{props.item.label}</label>
      <input {...props.item.inputConfig} />
    </div>
  );
  if (!props.item.label) {
    switch (props.item.buttonStyle) {
      case "add":
        inputMarkup = (
          <Button config={props.item.inputConfig} color={props.item.color}>
            {props.item.inputConfig.value}
            <AddIcon style={{ fontSize: 50 }} />
          </Button>
        );
        break;
      case "back":
        inputMarkup = (
          <Button
            click={props.click}
            config={props.item.inputConfig}
            color={props.item.color}
          >
            {props.item.inputConfig.value}
            <ReplayIcon style={{ fontSize: 50 }} />
          </Button>
        );
        break;
      default:
        inputMarkup = (
          <Button
            config={props.item.inputConfig}
            click={props.click}
            color={props.item.color}
          >
            {props.item.inputConfig.value}
          </Button>
          // <input {...props.item.inputConfig} className={styles.button} />
        );
    }
  }
  return inputMarkup;
};

export default Input;
