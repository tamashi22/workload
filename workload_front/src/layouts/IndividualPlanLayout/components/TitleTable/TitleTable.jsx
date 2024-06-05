import React from 'react';
import { TableControl } from '@/components/TableContol';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';

import 'handsontable/dist/handsontable.full.css';
import styles from './TitleTable.module.scss';

const TitleTable = () => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const educationYear = JSON.parse(localStorage.getItem('selectedYear'));

  const columnsConfig = [
    { key: 'name', title: 'Группа' },
    {
      key: 'direction',
      title: 'Направление',
      type: 'dropdown',
      // source: mappings.direction.options,
    },
    { key: 'course', title: 'Курс' },
    { key: 'numberOfStudents', title: 'Количество студентов', type: 'numeric' },
    {
      key: 'scolarshipStudents',
      title: 'Студенты на бюджете',
      type: 'numeric',
    },
    {
      key: 'contractStudents',
      title: 'Студенты на контракте',
      type: 'numeric',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <TableControl />
      <div className={styles.title}>
        <h2>План</h2>
        <p>{`Работы на ${educationYear.label} учебный год`}</p>
      </div>
      {/* <div className={styles.disciplines}></div> */}
    </div>
  );
};

export default TitleTable;
