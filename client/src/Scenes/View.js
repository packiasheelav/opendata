import React, { useState, useEffect } from "react";
import { Container, Box } from "@material-ui/core";
import SensorLineChart from "../components/LineChart";
import SensorAreaChart from "../components/AreaChart";
import SensorBarChart from "../components/BarChart";
import Count from "../components/Count";

import clsx from "clsx";
import { makeStyles, Grid, Paper, CircularProgress } from "@material-ui/core";
import "date-fns";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import senorIcon from "../static/icons/sensor.png";
import sensor2 from "../static/icons/sensor2.png";
import sensor3 from "../static/icons/sensor3.png";
import sensor4 from "../static/icons/sensor4.png";
import StatusCard from "../components/StatusCard";
import { listSensors } from "../redux/actions/sensorAction";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
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

const View = () => {
  const dispatch = useDispatch();
  const { loading, sensors } = useSelector((state) => state.allsensors);

  const sensorColor = {
    sensor1BgColor: "#5DBAE6",
    sensor2BgColor: "#B7D957",
    sensor3BgColor: "#F9C565",
    sensor4BgColor: "#FA8273",
  };

  const classes = useStyles();
  const [type, setType] = useState(0);
  const [sensorslocal, setSensorslocal] = useState(sensors);

  useEffect(() => {
    let interval;
    dispatch(listSensors());
    interval = setInterval(() => {
      dispatch(listSensors());
      setType(0);
    }, 60 * 60 * 1000); //refresh 1hr once
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const handleTypeChange = (e, newValue) => {
    const today = moment();
    if (newValue === 0) {
      setSensorslocal(sensors);
      setType(0);
    } else if (newValue === 2) {
      const filteredData = sensors.filter((element) =>
        moment(element.date).isSame(today, "day")
      );
      setSensorslocal(filteredData);
      setType(2);
    } else {
      const selectedNewDate = moment(new Date());
      const filteredData = sensors.filter((element) =>
        moment(element.date).isSame(selectedNewDate, "month")
      );
      setSensorslocal(filteredData);
      setType(1);
    }
  };

  const handleStatus = () => {};
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      {loading ? (
        <CircularProgress size={100} />
      ) : (
        <Container maxWidth="xl" className={classes.container}>
          <Grid className={classes.statusContainer} container spacing={3}>
            <Grid item xs={3}>
              <StatusCard
                handleStatus={handleStatus}
                senorIcon={senorIcon}
                name={"Sensor 1"}
                heading={"Average"}
                average={sensors.reduce((sum, { sensor1 }) => sum + sensor1, 0)}
                sensorColor={sensorColor.sensor1BgColor}
              />
            </Grid>
            <Grid item xs={3}>
              <StatusCard
                senorIcon={sensor2}
                handleStatus={handleStatus}
                name={"Sensor 2"}
                heading={"Average"}
                average={sensors.reduce((sum, { sensor2 }) => sum + sensor2, 0)}
                sensorColor={sensorColor.sensor2BgColor}
              />
            </Grid>
            <Grid item xs={3}>
              <StatusCard
                senorIcon={sensor3}
                handleStatus={handleStatus}
                name={"Sensor 3"}
                heading={"Average"}
                average={sensors.reduce((sum, { sensor3 }) => sum + sensor3, 0)}
                sensorColor={sensorColor.sensor3BgColor}
              />
            </Grid>
            <Grid item xs={3}>
              <StatusCard
                handleStatus={handleStatus}
                senorIcon={sensor4}
                name={"Sensor 4"}
                heading={"Average"}
                average={sensors.reduce((sum, { sensor4 }) => sum + sensor4, 0)}
                sensorColor={sensorColor.sensor4BgColor}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <SensorAreaChart
                  type={type}
                  handleTypeChange={handleTypeChange}
                  data={type === 0 ? sensors : sensorslocal}
                  sensorColor={sensorColor}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} elevation={3}>
                <SensorLineChart
                  type={type}
                  data={type === 0 ? sensors : sensorslocal}
                  sensorColor={sensorColor}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <SensorBarChart
                  type={type}
                  data={type === 0 ? sensors : sensorslocal}
                  sensorColor={sensorColor}
                />
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
          </Grid>
          <Box pt={4}></Box>
        </Container>
      )}
    </main>
  );
};
export default View;
