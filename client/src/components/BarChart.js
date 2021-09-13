import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from "recharts";
import { Typography } from "@material-ui/core";


export default function SensorBarChart({ type , data ,sensorColor}: props) {

  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        gutterBottom
      >
        {type}
      </Typography>
     <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" >
          <Label value="Date/Time" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis  label={{ value: 'Sensor value', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sensor1"
            fill={sensorColor.sensor1BgColor}
          />
          <Bar
            dataKey="sensor2"
            fill={sensorColor.sensor2BgColor}
          />
          <Bar
            dataKey="sensor3"
            fill={sensorColor.sensor3BgColor}
          />
           <Bar
            dataKey="sensor4"
            fill={sensorColor.sensor4BgColor}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
