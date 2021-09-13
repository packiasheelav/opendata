import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  typo: {
    fontSize: "11rem",
    color: "#5DBAE6",
  },
}));


export default function Count({ sensorsEntry }: props) {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h6">Data import count</Typography>
    <div className={classes.root}>
      <Typography className={classes.typo}>{sensorsEntry.length}</Typography>
    </div>
    </>
  );
}
