import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './AnalysisLayout.module.scss';
import 'chart.js/auto';

const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), {
  ssr: false,
});
const Pie = dynamic(() => import('react-chartjs-2').then(mod => mod.Pie), {
  ssr: false,
});
const Line = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), {
  ssr: false,
});
const Doughnut = dynamic(
  () => import('react-chartjs-2').then(mod => mod.Doughnut),
  {
    ssr: false,
  },
);

// Mock data for groups
const mockGroups = [
  {
    name: 'ИБ-2-21',
    course: '3',
    direction: 'ИБ',
    numberOfStudents: 24,
    scolarshipStudents: 4,
    contractStudents: 20,
    educationYearId: '2022 - 2023',
  },
  {
    name: 'ИБ-2-20',
    course: '4',
    direction: 'ИБ',
    numberOfStudents: 10,
    scolarshipStudents: 2,
    contractStudents: 8,
    educationYearId: '2022 - 2023',
  },
  {
    name: 'ИБ-2-23',
    course: '1',
    direction: 'ИБ',
    numberOfStudents: 24,
    scolarshipStudents: 4,
    contractStudents: 20,
    educationYearId: '2022 - 2023',
  },
  {
    name: 'ПИ-1-23',
    course: '1',
    direction: 'ПИ',
    numberOfStudents: 23,
    scolarshipStudents: 3,
    contractStudents: 20,
    educationYearId: '2023 - 2024',
  },
  {
    name: 'ИБ-1-23',
    course: '1',
    direction: 'ПИ',
    numberOfStudents: 23,
    scolarshipStudents: 3,
    contractStudents: 20,
    educationYearId: '2023 - 2024',
  },
  {
    name: 'ПИ-2-22',
    course: '2',
    direction: 'ПИ',
    numberOfStudents: 23,
    scolarshipStudents: 3,
    contractStudents: 20,
    educationYearId: '2023 - 2024',
  },
  {
    name: 'ИБ-1-22',
    course: '2',
    direction: 'ИБ',
    numberOfStudents: 25,
    scolarshipStudents: 5,
    contractStudents: 20,
    educationYearId: '2023 - 2024',
  },
  {
    name: 'ИБ-2-21',
    course: '3',
    direction: 'ИБ',
    numberOfStudents: 24,
    scolarshipStudents: 4,
    contractStudents: 20,
    educationYearId: '2023 - 2024',
  },
  {
    name: 'ИБ-2-20',
    course: '4',
    direction: 'ИБ',
    numberOfStudents: 10,
    scolarshipStudents: 2,
    contractStudents: 8,
    educationYearId: '2023 - 2024',
  },
  {
    name: 'ИБ-2-23',
    course: '1',
    direction: 'ИБ',
    numberOfStudents: 24,
    scolarshipStudents: 4,
    contractStudents: 20,
    educationYearId: '2023 - 2024',
  },
  {
    name: 'ИБ-2-23',
    course: '1',
    direction: 'ИБ',
    numberOfStudents: 24,
    scolarshipStudents: 4,
    contractStudents: 20,
    educationYearId: '2024 - 2025',
  },
];

const currentYear = '2023 - 2024';

// Filter data for the current year
const currentYearGroups = mockGroups.filter(
  group => group.educationYearId === currentYear,
);

// Prepare data for charts
const educationYearLabels = [
  ...new Set(mockGroups.map(group => group.educationYearId)),
];
const studentsPerYear = educationYearLabels.map(year => {
  return mockGroups
    .filter(group => group.educationYearId === year)
    .reduce((acc, group) => acc + group.numberOfStudents, 0);
});

const scolarshipStudents = currentYearGroups.reduce(
  (acc, group) => acc + group.scolarshipStudents,
  0,
);
const contractStudents = currentYearGroups.reduce(
  (acc, group) => acc + group.contractStudents,
  0,
);

const courses = [...new Set(currentYearGroups.map(group => group.course))];
const studentsPerCourse = courses.map(course => {
  return currentYearGroups
    .filter(group => group.course === course)
    .reduce((acc, group) => acc + group.numberOfStudents, 0);
});

const directions = [
  ...new Set(currentYearGroups.map(group => group.direction)),
];
const studentsPerDirection = directions.map(direction => {
  return currentYearGroups
    .filter(group => group.direction === direction)
    .reduce((acc, group) => acc + group.numberOfStudents, 0);
});

// Function to generate random colors
const generateRandomColors = numColors => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const r = Math.floor(Math.random() * 155) + 100; // Avoid too dark colors
    const g = Math.floor(Math.random() * 155) + 100; // Avoid too dark colors
    const b = Math.floor(Math.random() * 155) + 100; // Avoid too dark colors

    // Ensure the color is vibrant
    if ((r > 200 && g > 200) || (r > 200 && b > 200) || (g > 200 && b > 200)) {
      i--; // If the color is too light, try again
    } else {
      colors.push(`rgba(${r}, ${g}, ${b}, 100)`);
    }
  }
  return colors;
};

const AnalysisLayout = () => {
  const barData = {
    labels: educationYearLabels,
    datasets: [
      {
        label: 'Количество студетов',
        data: studentsPerYear,
        backgroundColor: generateRandomColors(educationYearLabels.length),
        borderColor: generateRandomColors(educationYearLabels.length).map(
          color => color.replace('0.8', '1'),
        ),
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Количество студетов на каждый учебный год',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const pieData = {
    labels: ['Студенты на бюджете', 'Студенты на конракте'],
    datasets: [
      {
        data: [scolarshipStudents, contractStudents],
        backgroundColor: generateRandomColors(2),
        hoverBackgroundColor: generateRandomColors(2).map(color =>
          color.replace('0.8', '1'),
        ),
      },
    ],
  };

  const pieOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Количесво студентов на конракте, бюджете(Текущий учебный год)',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const doughnutCourseData = {
    labels: courses,
    datasets: [
      {
        data: studentsPerCourse,
        backgroundColor: generateRandomColors(courses.length),
        hoverBackgroundColor: generateRandomColors(courses.length).map(color =>
          color.replace('0.8', '1'),
        ),
      },
    ],
  };

  const doughnutCourseOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Количество студентов по курсам(Текущий учебный год)',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const doughnutDirectionData = {
    labels: directions,
    datasets: [
      {
        data: studentsPerDirection,
        backgroundColor: generateRandomColors(directions.length),
        hoverBackgroundColor: generateRandomColors(directions.length).map(
          color => color.replace('0.8', '1'),
        ),
      },
    ],
  };

  const doughnutDirectionOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Количество студентов по направлениям(Текущий учебный год)',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.chartWrapper}>
        <Bar data={barData} options={barOptions} />
      </div>

      <div className={styles.container}>
        <div className={styles.chartWrapper2}>
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className={styles.chartWrapper2}>
          <Doughnut data={doughnutCourseData} options={doughnutCourseOptions} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.chartWrapper2}>
          <Doughnut
            data={doughnutDirectionData}
            options={doughnutDirectionOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisLayout;
