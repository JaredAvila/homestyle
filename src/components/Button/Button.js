import React from "react";
import * as styles from "./Button.module.scss";

const Button = (props) => {
  switch (props.color) {
    case "primary":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.primary}
        >
          {props.children}
        </button>
      );
    case "primaryIcon":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.primaryIcon}
        >
          {props.children}
        </button>
      );
    case "lightBlue":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.lightBlue}
        >
          {props.children}
        </button>
      );
    case "lightBlueIcon":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.lightBlueIcon}
        >
          {props.children}
        </button>
      );
    case "darkBlue":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.darkBlue}
        >
          {props.children}
        </button>
      );
    case "darkBlueIcon":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.darkBlueIcon}
        >
          {props.children}
        </button>
      );
    case "lightPeach":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.lightPeach}
        >
          {props.children}
        </button>
      );
    case "lightPeachIcon":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.lightPeachIcon}
        >
          {props.children}
        </button>
      );
    case "peach":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.peach}
        >
          {props.children}
        </button>
      );
    case "peachIcon":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.peachIcon}
        >
          {props.children}
        </button>
      );
    case "darkPeach":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.darkPeach}
        >
          {props.children}
        </button>
      );
    case "darkPeachIcon":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.darkPeachIcon}
        >
          {props.children}
        </button>
      );
    case "white":
      return (
        <button
          {...props.config}
          onClick={props.click}
          className={styles.white}
        >
          {props.children}
        </button>
      );
    case "icon":
      return (
        <button {...props.config} onClick={props.click} className={styles.icon}>
          {props.children}
        </button>
      );
    default:
      return (
        <button
          className={styles.button}
          {...props.config}
          onClick={props.click}
        >
          {props.children}
        </button>
      );
  }
};

export default Button;
