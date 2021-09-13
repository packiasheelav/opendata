import React from "react";
import { makeStyles, Tabs, Tab } from "@material-ui/core";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: ".5rem",
  },
  tab: {
    color: "#5DBAE6",
  },
  areaChart: {
    display: "inline-flex",
    justifyContent: "space-between",
  },
}));

export default function SensorAreaChart({
  handleTypeChange,
  type,
  data,
  sensorColor,
}: props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.areaChart}>
        <Tabs
          indicatorColor="primary"
          onChange={handleTypeChange}
          value={type}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#5DBAE6",
            },
          }}
        >
          <Tab className={classes.tab} label="All" />
          <Tab className={classes.tab} label="Month" />
          <Tab className={classes.tab} label="Today" />
        </Tabs>
      </div>
      <ResponsiveContainer>
        <AreaChart
          width={300}
          height={150}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date">
            <Label value="Date/Time" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Sensor value",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sensor1"
            stackId="1"
            stroke={sensorColor.sensor1BgColor}
            fill={sensorColor.sensor1BgColor}
          />
          <Area
            type="monotone"
            dataKey="sensor2"
            stackId="1"
            stroke={sensorColor.sensor2BgColor}
            fill={sensorColor.sensor2BgColor}
          />
          <Area
            type="monotone"
            dataKey="sensor3"
            stackId="1"
            stroke={sensorColor.sensor3BgColor}
            fill={sensorColor.sensor3BgColor}
          />
          <Area
            type="monotone"
            dataKey="sensor4"
            stackId="1"
            stroke={sensorColor.sensor4BgColor}
            fill={sensorColor.sensor4BgColor}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
