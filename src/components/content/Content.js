import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, MiddleName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: "3rem",
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  const fullName = MiddleName
    ? `${FirstName} ${MiddleName} ${LastName}`
    : `${FirstName} ${LastName}`;

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
          <TextDecrypt text={fullName} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
          <TextDecrypt text={`${Resume.basics.job1} + `} />
          <TextDecrypt text={`${Resume.basics.job2}`} />
        </Typography>
      </div>
    </Container>
  );
};
