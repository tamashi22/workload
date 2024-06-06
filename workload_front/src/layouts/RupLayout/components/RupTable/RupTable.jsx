import React, { useRef, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';
import { HyperFormula } from 'hyperformula';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import styles from './RupTable.module.scss';

const RupTable = ({ data }) => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: 'internal-use-in-handsontable',
  });

  // Define the columns configuration with max width
  const columns = [
    { data: 'disciplineCode', title: 'Код дисциплины' },
    { data: 'nameOfDiscipline', title: 'Название дисциплины', width: '200px' },
    { data: 'department', title: 'Кафедра' },
    { data: 'direction', title: 'Направление', type: 'dropdown' },
    { data: 'credits', title: 'Кредиты' },
    { data: 'hours', title: 'Часы' },
    { data: 'totalHours', title: 'Общее количество часов' },
    { data: 'lectures', title: 'Лекции' },
    { data: 'laboratories', title: 'Лабораторные работы' }, // Corrected from 'labaratories'
    { data: 'practical', title: 'Практические занятия' },
    { data: 'independentWorks', title: 'Самостоятельные работы' }, // Corrected from 'indepedentWorks'
    {
      data: 'y1s1Laboratories',
      title: '1-й год, 1-й семестр лабораторные работы',
    }, // Corrected from '1y1sLabaratories'
    {
      data: 'y1s1Practical',
      title: '1-й год, 1-й семестр практические занятия',
    }, // Corrected from '1y1sPractical'
    { data: 'y1s1Credits', title: '1-й год, 1-й семестр кредиты' }, // Corrected from '1y1sCredits'
    { data: 'y1s1Lectures', title: '1-й год, 1-й семестр лекции' }, // Corrected from '1y1sLectures'
    {
      data: 'y1s2Laboratories',
      title: '1-й год, 2-й семестр лабораторные работы',
    }, // Corrected from '1y2sLabaratories'
    {
      data: 'y1s2Practical',
      title: '1-й год, 2-й семестр практические занятия',
    }, // Corrected from '1y2sPractical'
    { data: 'y1s2Credits', title: '1-й год, 2-й семестр кредиты' }, // Corrected from '1y2sCredits'
    { data: 'y1s2Lectures', title: '1-й год, 2-й семестр лекции' }, // Corrected from '1y2sLectures'
    {
      data: 'y2s3Laboratories',
      title: '2-й год, 3-й семестр лабораторные работы',
    }, // Corrected from '2y3sLabaratories'
    {
      data: 'y2s3Practical',
      title: '2-й год, 3-й семестр практические занятия',
    }, // Corrected from '2y3sPractical'
    { data: 'y2s3Credits', title: '2-й год, 3-й семестр кредиты' }, // Corrected from '2y3sCredits'
    { data: 'y2s3Lectures', title: '2-й год, 3-й семестр лекции' }, // Corrected from '2y3sLectures'
    {
      data: 'y2s4Laboratories',
      title: '2-й год, 4-й семестр лабораторные работы',
    }, // Corrected from '2y4sLabaratories'
    {
      data: 'y2s4Practical',
      title: '2-й год, 4-й семестр практические занятия',
    }, // Corrected from '2y4sPractical'
    { data: 'y2s4Credits', title: '2-й год, 4-й семестр кредиты' }, // Corrected from '2y4sCredits'
    { data: 'y2s4Lectures', title: '2-й год, 4-й семестр лекции' }, // Corrected from '2y4sLectures'
    {
      data: 'y3s5Laboratories',
      title: '3-й год, 5-й семестр лабораторные работы',
    }, // Corrected from '3y5sLabaratories'
    {
      data: 'y3s5Practical',
      title: '3-й год, 5-й семестр практические занятия',
    }, // Corrected from '3y5sPractical'
    { data: 'y3s5Credits', title: '3-й год, 5-й семестр кредиты' }, // Corrected from '3y5sCredits'
    { data: 'y3s5Lectures', title: '3-й год, 5-й семестр лекции' }, // Corrected from '3y5sLectures'
    {
      data: 'y3s6Laboratories',
      title: '3-й год, 6-й семестр лабораторные работы',
    }, // Corrected from '3y6sLabaratories'
    {
      data: 'y3s6Practical',
      title: '3-й год, 6-й семестр практические занятия',
    }, // Corrected from '3y6sPractical'
    { data: 'y3s6Credits', title: '3-й год, 6-й семестр кредиты' }, // Corrected from '3y6sCredits'
    { data: 'y3s6Lectures', title: '3-й год, 6-й семестр лекции' }, // Corrected from '3y6sLectures'
    {
      data: 'y4s7Laboratories',
      title: '4-й год, 7-й семестр лабораторные работы',
    }, // Corrected from '4y7sLabaratories'
    {
      data: 'y4s7Practical',
      title: '4-й год, 7-й семестр практические занятия',
    }, // Corrected from '4y7sPractical'
    { data: 'y4s7Credits', title: '4-й год, 7-й семестр кредиты' }, // Corrected from '4y7sCredits'
    { data: 'y4s7Lectures', title: '4-й год, 7-й семестр лекции' }, // Corrected from '4y7sLectures'
    {
      data: 'y4s8Laboratories',
      title: '4-й год, 8-й семестр лабораторные работы',
    }, // Corrected from '4y8sLabaratories'
    {
      data: 'y4s8Practical',
      title: '4-й год, 8-й семестр практические занятия',
    }, // Corrected from '4y8sPractical'
    { data: 'y4s8Credits', title: '4-й год, 8-й семестр кредиты' }, // Corrected from '4y8sCredits'
    { data: 'y4s8Lectures', title: '4-й год, 8-й семестр лекции' }, // Corrected from '4y8sLectures'
    { data: 'zachet', title: 'Зачет' },
    { data: 'courseWorks', title: 'Курсовая работа/проект' },
    { data: 'stateExam', title: 'Государственный экзамен' },
  ];

  const afterGetColHeader = (col, TH) => {
    const header = TH.querySelector('.colHeader');
    if (header) {
      header.style.transform = 'rotate(-90deg)';
      header.style.transformOrigin = 'center center';
      header.style.height = '250px';
      header.style.whiteSpace = 'nowrap';
      header.style.display = 'flex';
      header.style.alignItems = 'center';
 header.style.textWrap = 'wrap';    
      header.style.justifyContent = 'center';
    }
  };

  return (
    <div className={styles.table}>
      <HotTable
        data={data}
        columns={columns}
        dropdownMenu={true}
        hiddenColumns={{
          indicators: true,
        }}
        autoColumnSize={false}
        minSpareRows={1}
        contextMenu={true}
        filters={true}
        rowHeaders={true} 
        height="auto"
        columnSorting={true}
        colHeaders={true}
        manualRowMove={true}
        language={ruRU.languageCode}
        comments={true}
        licenseKey="non-commercial-and-evaluation"
        formulas={{
          engine: hyperformulaInstance,
          sheetId: 1,
          sheetName: 'RUP',
        }}
        afterGetColHeader={afterGetColHeader}
      />
    </div>
  );
};

export default RupTable;
