import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan 23",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb 23",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar 23",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Apr 23",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May 23",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "June 23",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jul 23",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Aug 23",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Sep 23",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Oct 23",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Nov 23",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Dec 23",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]; 

function Chart() {
  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}

export default Chart
