import React, { useMemo } from 'react';
import { TableControl } from '@/components/TableContol';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';
import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
} from 'chart.js';
import { getColumnName } from '@/helpers/getColumnName';
import 'handsontable/dist/handsontable.full.css';
import { allData } from '../EducationTable/EducationTable';
import styles from './TitleTable.module.scss';
import Switch from '@/components/ui/Switch';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
);

const Doughnut = dynamic(
  () => import('react-chartjs-2').then(mod => mod.Doughnut),
  {
    ssr: false,
  },
);
const Pie = dynamic(() => import('react-chartjs-2').then(mod => mod.Pie), {
  ssr: false,
});

const TitleTable = ({ fillPlan, isFull }) => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const educationYear = JSON.parse(localStorage.getItem('selectedYear'));

  const columnsConfig = [
    { key: 'type', title: 'Виды работ' },
    {
      key: 'planned',
      title: 'Запланировано часов',
    },
    { key: 'fact', title: 'Фактически выполенно часов' },
  ];
  const data = [
    {
      type: 'Учебная',
      planned: 410,
      fact: isFull ? '410' : 0,
    },
    {
      type: 'Учебно-методическая',
      planned: '=b1-SUM(b3:b5)',
      fact: '0',
    },
    {
      type: 'Организационно-методическая',
      planned: 30,
      fact: isFull ? '30' : 0,
    },
    {
      type: 'Научно-исследовательская',
      planned: 30,
      fact: '0',
    },
    {
      type: 'Работа по воспитанию студентов',
      planned: 0,
      fact: '0',
    },
    {
      type: 'Всего',
      planned: '=1*850',
      fact: '=SUM(c1:c5)',
    },
  ];

  const doughnutData = useMemo(() => {
    const lectureHours = allData.reduce(
      (acc, item) => acc + item.lectionsByWorkload,
      0,
    );
    const practicalHours = allData.reduce(
      (acc, item) => acc + item.practicalByWorkload,
      0,
    );
    const laboratoryHours = allData.reduce(
      (acc, item) => acc + item.laborByWorkload,
      0,
    );
    const examHours = allData.reduce((acc, item) => acc + item.exams, 0);

    return {
      labels: [
        'Лекции',
        'Практические занятия',
        'Лабораторные работы',
        'Экзамены',
      ],
      datasets: [
        {
          data: [lectureHours, practicalHours, laboratoryHours, examHours],
          backgroundColor: [
            'rgba(255, 99, 132, 100)',
            'rgba(54, 162, 235, 100)',
            'rgba(255, 206, 86, 100)',
            'rgba(75, 192, 19, 100)',
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
        },
      ],
    };
  }, []);
  const pieData = useMemo(() => {
    const data = [
      {
        type: 'Учебная',
        planned: 410,
        fact: isFull ? '410' : 0,
      },
      {
        type: 'Учебно-методическая',
        planned: 350,
        fact: '0',
      },
      {
        type: 'Организационно-методическая',
        planned: 30,
        fact: isFull ? '30' : 0,
      },
      {
        type: 'Научно-исследовательская',
        planned: 30,
        fact: '0',
      },
      {
        type: 'Работа по воспитанию студентов',
        planned: 0,
        fact: '0',
      },
    ];
    const labels = data.map(item => item.type);
    const plannedHours = data.map(item => item.planned);
    return {
      labels,
      datasets: [
        {
          data: plannedHours,
          backgroundColor: [
            'rgba(255, 99, 132, 100)',
            'rgba(54, 162, 235, 100)',
            'rgba(255, 206, 86, 100)',
            'rgba(75, 192, 192, 100)',
            'rgba(153, 102, 255, 100)',
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
        },
      ],
    };
  }, [data]);
  const pieOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Доля видов работ в годовой нагрузке',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  const doughnutOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Доля видов занятий в учебной работе',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <TableControl>
        <div className={styles.switch}>
          <Switch value={isFull} onClick={fillPlan} />
          <p className={styles.label}>Указать все фактические часы на 100%</p>
        </div>
      </TableControl>
      <div className={styles.title}>
        <h2>План</h2>
        <p>{`Работы на ${educationYear.label} учебный год`}</p>
      </div>
      <div className={styles.disciplines}>
        <h4>Порученные учебные дисциплины:</h4>
        <div className={styles.tags}>
          <div className={styles.tag}>Информатика1</div>
          <div className={styles.tag}>Информатика2</div>
        </div>
      </div>
      <p className={styles.tableTitle}>ГОДОВАЯ НАГРУЗКА</p>
      <div className={styles.table}>
        <HotTable
          fixedRowsBottom={1}
          data={data}
          colHeaders={true}
          rowHeaders={true}
          dropdownMenu={true}
          contextMenu={true}
          filters={true}
          columnSorting={true}
          licenseKey="non-commercial-and-evaluation"
          language={ruRU.languageCode}
          formulas={{
            engine: HyperFormula.buildEmpty({
              licenseKey: 'internal-use-in-handsontable',
            }),
          }}
        >
          {columnsConfig.map((column, index) => (
            <HotColumn
              key={index}
              data={column.key}
              title={`${getColumnName(index)} ${column.title}`}
              type={column.type || 'text'}
              {...(column.type === 'dropdown' && { source: column.source })}
            />
          ))}
        </HotTable>
      </div>
      <div className={styles.charts}>
        <div className={styles.chartWrapper}>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
        <div className={styles.chartWrapper}>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default TitleTable;
