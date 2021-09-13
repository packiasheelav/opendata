import React from "react";
import dateFormat from "../utils/date-utils"
import Typography from "@material-ui/core/Typography";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label
} from "recharts";

export default function DataImportAreaChart({sensors}: props) {

  const data = sensors.map((sensor) => ({
    createdDate: dateFormat(sensor.createdAt, "L"),
    createdTime: dateFormat(sensor.createdAt, "HH"),
  }));
  
  return (
    <>
      <Typography component="h2" variant="h6" gutterBottom>
            Data import report
          </Typography>
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
                <XAxis dataKey="createdDate" >
                <Label value="Import date" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="createdTime"
                  stackId="1"
                  stroke="#5DBAE6"
                  fill="#FF7A0C"
                  dot={{ stroke: '#5DBAE6', strokeWidth: 2 }} 
                />
              </AreaChart>
            </ResponsiveContainer>
    </>
  );
}
