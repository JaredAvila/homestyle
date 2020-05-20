import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import CheckIcon from "@material-ui/icons/Check";

import * as styles from "./AddChild.module.scss";
import Form from "../Form/Form";

const AddChild = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");

  const onNameChangeHandler = (e) => {
    setChildName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setChildAge(e.target.value);
  };

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    console.log(childName + " who is " + childAge + " was added");
    setIsAdded(true);
    setChildAge("");
    setChildName("");
  };

  const inputData = [
    {
      label: "Child's First Name",
      labelConfig: {
        htmlFor: "fName",
      },
      inputConfig: {
        name: "fName",
        placeholder: "Billy",
        type: "text",
        value: childName,
        onChange: onNameChangeHandler,
      },
    },
    {
      label: "Age",
      labelConfig: {
        htmlFor: "age",
      },
      inputConfig: {
        name: "age",
        type: "text",
        placeholder: "7",
        maxLength: "2",
        value: childAge,
        onChange: onAgeChangeHandler,
      },
    },
    {
      label: false,
      inputConfig: {
        value: "Add",
        type: "submit",
      },
    },
  ];

  return (
    <div className={styles.addChild}>
      <h4 className={styles.title}>Add a child</h4>
      <Form onSubmit={onSubmitHanlder} inputList={inputData} />
      <p className={styles.addedText}>
        {isAdded ? "*Child has been added" : ""}
      </p>
      <Link className={styles.button} to="/register/confirm">
        Finshed <CheckIcon />
      </Link>
    </div>
  );
};

export default withRouter(AddChild);
