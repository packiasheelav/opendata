import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:  ({sensorColor}) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: sensorColor
  }),
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  controls: {
    width: 151,
  },
  content: {
    display: "grid",
  },
  imageCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  image: {
    width: "2rem",
    height: "2rem",
  },
  chip: {
    marginLeft: ".8rem",
    backgroundColor: "grey",
  },
  sensor1: {
    background: "#5DBAE6",
  },
  sensor2: {
    background: "#B7D957",
  },
}));
const StatusCard = ({ name, heading, average, senorIcon, handleStatus,sensorColor}:props) => {
  const classes = useStyles({sensorColor});

  return (
    <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="h6">{heading}</Typography>
            <Typography variant="h6">{average}</Typography>
          </CardContent>
        </div>
        <div className={classes.imageCard}>
          <CardMedia
            className={classes.image}
            image={senorIcon}
            title="Sensor"
          />
        </div>
    </Card>
  );
};

export default StatusCard;
