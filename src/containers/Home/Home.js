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
          const progressInt = parseInt(child.progress);
          const setColor = (num) => {
            if (num <= 25) return "#e22c2c";
            if (num >= 26 && num < 50) return "#e6d43b";
            if (num >= 51 && num < 75) return "#1974d3";
            if (num >= 75) return "#1acf1a";
          };

          const progressColor = setColor(progressInt);
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
                <div>
                  <CircularProgress
                    variant="static"
                    style={{ color: progressColor }}
                    value={progressInt}
                  />
                  <p
                    style={{ color: progressColor }}
                    className={styles.progressText}
                  >
                    {progressInt}%
                  </p>
                </div>
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
