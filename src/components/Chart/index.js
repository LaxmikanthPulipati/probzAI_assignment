// src/components/Chart.js
import React, { Component } from 'react';
import {
 XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart
} from 'recharts';
import chartData from '../Data/chartData.json';
import './index.css'

class Chart extends Component {
  state = {
    timeframe: 'daily',
    filteredData: chartData
  }

  filterData = (timeframe) => {
    let filteredData;
    switch (timeframe) {
      case 'weekly':
        filteredData = chartData.filter((_, index) => index % 7 === 0);
        break;
      case 'monthly':
        filteredData = chartData.filter((_, index) => index % 30 === 0);
        break;
      case 'daily':
      default:
        filteredData = chartData
    }
    this.setState({
      timeframe,
      filteredData
    });
  };

  render() {
    const { filteredData } = this.state;

    return (
      <> 
       
      <div className='chart-container'>
        <div className='btn-container'>
          <button className='btn' onClick={() => this.filterData('daily')}>Daily</button>
          <button className='btn' onClick={() => this.filterData('weekly')}>Weekly</button>
          <button className='btn' onClick={() => this.filterData('monthly')}>Monthly</button>
        </div>
        <ResponsiveContainer width="90%" height={400}>
        <BarChart
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="timestamp" stackId="a" fill="#8884d8" />
          <Bar dataKey="value" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      </>
    );
  }
}

export default Chart;
