import { TableControl } from '@/components/TableContol';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Groups } from '@/constants/GroupsArr';
import styles from './AnalysisLayout.module.scss';
import dynamic from 'next/dynamic';
import 'chart.js/auto';


const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'GeeksforGeeks Line Chart',
      data: [65, 55, 80, 81, 56],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};
import { Bar } from 'react-chartjs-2';

const data_2 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

import { Pie } from 'react-chartjs-2';

const data_3 = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      hoverBackgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)']
    }
  ]
};

import { Doughnut } from 'react-chartjs-2';

const data_4 = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      hoverBackgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)']
    }
  ]
};




const AnalysisLayout = () => {
  const [state, setState] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <>
    <div style={{ width: '700px', height: '700px' }}>
      <h1>Example 1: Line Chart</h1>
      <Line data={data} />
    </div>
    <div style={{ width: '700px', height: '700px' }}>
      <Bar data={data_2} />
    </div>
    <div style={{ width: '700px', height: '700px' }}>
      <Pie data={data_3} />
    </div>
    <div style={{ width: '700px', height: '700px' }}>
      <Doughnut data={data_4} />
    </div>

    </>
  );
};

export default AnalysisLayout;
