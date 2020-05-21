import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import * as styles from "./Home.module.scss";
import Children from "../../models/Child";
import { Avatar, Paper, CircularProgress } from "@material-ui/core";

const Home = () => {
  let history = useHistory();
  return (
    <div className={styles.home}>
      <Button
        color="peach"
        click={() => {
          history.push("/activities");
        }}
      >
        Start
      </Button>
      <div className={styles.children}>
        {Children.map((child) => {
          console.log(child);
          return (
            <Paper
              className={styles.childStats}
              elevation={2}
              key={Math.random()}
            >
              <div className={styles.child}>
                <Avatar
                  className={styles.avatar}
                  alt={child.name}
                  src={child.img}
                />
                <div style={{ textAlign: "center", paddingRight: "20px" }}>
                  <p>{child.name}</p>
                  <p>Age: {child.age}</p>
                </div>
              </div>
              <div className={styles.progress}>
                <p>
                  Today's <br /> Progress:
                </p>
                <CircularProgress
                  variant="static"
                  value={parseInt(child.progress)}
                />
              </div>
            </Paper>
          );
        })}
      </div>

      <Button
        color="peach"
        click={() => {
          history.push("/activities");
        }}
      >
        Start
      </Button>
    </div>
  );
};

export default Home;
