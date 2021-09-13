import React from "react";
import { Typography } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label
} from "recharts";

export default function SensorLineChart({ type, data, sensorColor }: props) {
  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        gutterBottom
      >
        {type}
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          syncId="anyId"
          width={300}
          height={150}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" >
          <Label value="Date/Time" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis  label={{ value: 'Sensor value', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sensor1"
            stroke={sensorColor.sensor1BgColor}
            fill={sensorColor.sensor1BgColor}
          />
          <Line
            type="monotone"
            dataKey="sensor2"
            stroke={sensorColor.sensor2BgColor}
            fill={sensorColor.sensor2BgColor}
          />
          <Line
            type="monotone"
            dataKey="sensor3"
            stroke={sensorColor.sensor3BgColor}
            fill={sensorColor.sensor3BgColor}
          />
          <Line
            type="monotone"
            dataKey="sensor4"
            stroke={sensorColor.sensor4BgColor}
            fill={sensorColor.sensor4BgColor}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
