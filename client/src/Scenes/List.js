import React, { useEffect } from "react";
import Datatable from "../components/Datatable";
import Count from "../components/Count";
import { Container } from "@material-ui/core";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import DataImportAreaChart from "../components/DataImportAreaChart";
import { useSelector, useDispatch } from "react-redux";
import { listSensors } from "../redux/actions/sensorAction";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    height: "100%",
    marginTop: "3rem",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  fixedHeight: {
    height: 450,
  },
  status: {
    fontSize: "1vw",
    backgroundColor: "white",
    textAlign: "center",
    padding: ".5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  img: {
    width: "2rem",
    height: "2rem",
  },
}));
const List = (props) => {
  const dispatch = useDispatch();
  const { sensors } = useSelector((state) => state.allsensors);
  const classes = useStyles();

  useEffect(() => {
    dispatch(listSensors());
  }, [dispatch]);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth={true} className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <DataImportAreaChart sensors={sensors} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={fixedHeightPaper}
          >
            <Count sensorsEntry={sensors} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={12}>
          <Paper className={fixedHeightPaper}>
            <Datatable limit={30} sensors={sensors} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default List;
