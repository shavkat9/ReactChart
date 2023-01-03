import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Hello',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Thank u',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Salam',
      uv: 2000,
      pv: 6800,
      amt: 2290,
    },
    {
      name: 'Good Morning',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Good Afternoon',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Good Evening',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Good Bye',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  export default class ChartLine extends PureComponent {
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }





