import React, { useState, useEffect } from 'react';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import { getColumnName } from '@/helpers/getColumnName';
import { HyperFormula } from 'hyperformula';
import * as XLSX from 'xlsx';
import 'handsontable/dist/handsontable.full.css';
import styles from './WorkloadTable.module.scss';

const WorkloadTable = ({ data, teachers, useDefaultFormulas, setWorkload }) => {
  const [tableData, setTableData] = useState([]);

  // Register Handsontable modules and language dictionary
  registerAllModules();
  registerLanguageDictionary(ruRU);

  // Initialize HyperFormula instance
  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: 'internal-use-in-handsontable',
  });

  if (!hyperformulaInstance) {
    return <div>Loading...</div>;
  }

  // Effect to set initial data with formulas
  useEffect(() => {
    const initialData = data.map((item, rowIndex) => ({
      ...item,
      numberOfStudentsWithCoef: useDefaultFormulas
        ? `=D${rowIndex + 1} * 1`
        : item.numberOfStudentsWithCoef,
      lectionsByWorkload: useDefaultFormulas
        ? `=H${rowIndex + 1}`
        : item.lectionsByWorkload,
      practicalByWorkload: useDefaultFormulas
        ? `=J${rowIndex + 1} * 2`
        : item.practicalByWorkload,
      labaratoriesByWorkload: useDefaultFormulas
        ? `=L${rowIndex + 1}`
        : item.labaratoriesByWorkload,
      exams: useDefaultFormulas ? `=0.5 * E${rowIndex + 1}` : item.exams,
      individualWorks: useDefaultFormulas
        ? `=((30 * F${rowIndex + 1} - (I${rowIndex + 1} + K${rowIndex + 1} + M${
            rowIndex + 1
          })) / 30) * 0.2 * E${rowIndex + 1}`
        : item.individualWorks,
      scolarshipHours: useDefaultFormulas
        ? `=AJ${rowIndex + 1} / (AF${rowIndex + 1} + AG${rowIndex + 1}) * AF${
            rowIndex + 1
          }`
        : item.scolarshipHours,
      contractHours: useDefaultFormulas
        ? `=AJ${rowIndex + 1} / (AF${rowIndex + 1} + AG${rowIndex + 1}) * AG${
            rowIndex + 1
          }`
        : item.contractHours,
      totalWorkloadHours: useDefaultFormulas
        ? `=I${rowIndex + 1} + K${rowIndex + 1} + M${rowIndex + 1} + SUM(N${
            rowIndex + 1
          }:AE${rowIndex + 1})`
        : item.totalWorkloadHours,
      hoursPhond: useDefaultFormulas ? `=AJ${rowIndex + 1}` : item.hoursPhond,
    }));
    setTableData(initialData);
    // setWorkload(initialData);
  }, [data, useDefaultFormulas]);


  
  // Column titles in Russian
  const columnTitles = {
    discipline: 'Дисциплины',
    group: 'Группа',
    course: 'Курс',
    numberOfStudents: 'Количество студентов',
    numberOfStudentsWithCoef: 'Студенты с коэффициентом',
    credits: 'Кредиты',
    semester: 'Семестры',
    lectionsByRup: 'Лекции по РУП',
    lectionsByWorkload: 'Лекции по нагрузке',
    practicalByRup: 'Практика по РУП',
    practicalByWorkload: 'Практика по нагрузке',
    labaratoriesByRup: 'Лабораторные по РУП',
    labaratoriesByWorkload: 'Лабораторные по нагрузке',
    courseWorksByRup: 'Курсовые работы по РУП',
    courseWorksByAccept: 'Курсовые работы по приёму',
    courseWorksByManagement: 'Курсовые работы по руководству',
    consultationsOnline: 'Консультации групповые (онлайн)',
    consultationsIndividual: 'Индивидуальные консультации',
    consultationsByTeacher: 'Консультации учителя',
    cheksOfWorks: 'Проверка работ',
    cheksByHeadOfCafedra: 'Проверки главой кафедры',
    reviewsOfworks: 'Рецензирование контрольных работ',
    eduPractice: 'Учебная практика',
    interships: 'Производственная практика',
    tests: 'На зачёты',
    exams: 'Экзамены',
    diplomManagement: 'Дипломное руководство',
    diplomConsultations: 'Консультации по диплому',
    diplomReviews: 'Рецензирование дипломных проектов',
    diplomExams: 'Участие в ГЭК',
    individualWorks: 'Индивидуальные работы',
    scolarshipStudents: 'Студенты на бюджете',
    contractStudents: 'Студенты на контракте',
    scolarshipHours: 'Часы для бюджетников',
    contractHours: 'Часы для контрактников',
    totalWorkloadHours: 'Всего учебных часов по расчету',
    practice: 'Практика',
    lectures: 'Лекции',
    laboratories: 'Лабараторные',
    examsColumn: 'Экзамены',
    other: 'Другое',
    hoursPhond: 'Почасовой Фонд',
  };

  // Helper function to parse numbers
  const parseNumber = value => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Calculate derived fields
  const calculateDerivedFields = rowData => {
    const numberOfStudentsWithCoef = parseNumber(rowData.numberOfStudents) * 1;
    const lectionsByWorkload = parseNumber(rowData.lectionsByRup);
    const practicalByWorkload = parseNumber(rowData.practicalByRup) * 2;
    const labaratoriesByWorkload = rowData.labaratoriesByRup
      ? parseNumber(rowData.labaratoriesByRup)
      : 0;
    const exams = 0.5 * parseNumber(rowData.numberOfStudents);
    const individualWorks =
      ((30 * parseNumber(rowData.credits) -
        (parseNumber(rowData.practicalByRup) +
          parseNumber(rowData.lectionsByRup) +
          parseNumber(rowData.labaratoriesByRup))) /
        30) *
      0.2 *
      parseNumber(rowData.numberOfStudents);
    const totalWorkloadHours =
      parseNumber(rowData.practicalByRup) +
      parseNumber(rowData.lectionsByRup) +
      parseNumber(rowData.labaratoriesByRup) +
      exams +
      individualWorks;

    return {
      numberOfStudentsWithCoef,
      lectionsByWorkload,
      practicalByWorkload,
      labaratoriesByWorkload,
      exams,
      individualWorks,
      totalWorkloadHours,
    };
  };

  // Calculate hoursPhond
  const calculateHoursPhond = rowData => {
    const derivedFields = calculateDerivedFields(rowData);
    const totalHours = derivedFields.totalWorkloadHours;
    const lections = rowData.lectures ? derivedFields.lectionsByWorkload : 0;
    const practical = rowData.practice ? derivedFields.practicalByWorkload : 0;
    const laboratories = rowData.laboratories
      ? derivedFields.labaratoriesByWorkload
      : 0;
    const exams = rowData.examsColumn ? derivedFields.exams : 0;
    const other = rowData.other ? derivedFields.individualWorks : 0;

    const remainingHours =
      totalHours - (lections + practical + laboratories + exams + other);
    return remainingHours > 0 ? remainingHours : 0;
  };

  // Handle dropdown change
  const handleDropdownChange = (row, column, value) => {
    const newData = [...tableData];
    newData[row][column] = value;

    // Manually recalculate hoursPhond
    newData[row].hoursPhond = calculateHoursPhond(newData[row]);

    setTableData(newData);
    // setWorkload(newData);
  };

  // Adjust formulas for Excel
  const adjustFormula = formula => {
    return formula.replace(/([A-Z]+)(\d+)/g, (match, p1, p2) => {
      return `${p1}${parseInt(p2) + 1}`;
    });
  };

  // Export data to Excel
  const exportToExcel = () => {
    // Include column headers
    const headers = Object.values(columnTitles);
    const dataToExport = [
      headers,
      ...tableData.map(row => Object.keys(columnTitles).map(key => row[key])),
    ];

    // Convert data to sheet
    const worksheet = XLSX.utils.aoa_to_sheet(dataToExport);

    // Add formulas manually
    tableData.forEach((row, rowIndex) => {
      Object.keys(row).forEach((key, colIndex) => {
        if (typeof row[key] === 'string' && row[key].startsWith('=')) {
          const cellAddress = XLSX.utils.encode_cell({
            c: colIndex,
            r: rowIndex + 1,
          }); // +1 to account for headers
          worksheet[cellAddress] = { f: adjustFormula(row[key].substring(1)) }; // Adjust row numbers in formulas
        }
      });
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Workload Data');
    XLSX.writeFile(workbook, 'workload_data.xlsx');
  };

  // AfterGetColHeader function to rotate and center-align text
  const afterGetColHeader = (col, TH) => {
    const header = TH.querySelector('.colHeader');
    if (header) {
      header.style.transform = 'rotate(-90deg)';
      header.style.transformOrigin = 'center center';
      header.style.height = '150px';
      header.style.whiteSpace = 'nowrap';
      header.style.display = 'flex';
      header.style.alignItems = 'center';
      header.style.justifyContent = 'center';
      header.style.textWrap = 'wrap';
    }
  };

  return (
    <div>
      <h2>Нагрузка</h2>
      <button onClick={exportToExcel}>Export to Excel</button>
      <HotTable
        data={tableData}
        colHeaders={Object.values(columnTitles)}
        rowHeaders={true}
        dropdownMenu={true}
        contextMenu={true}
        autoColumnSize={false}
        hiddenColumns={{
          indicators: true,
        }}
        autoRowSize={true}
        filters={true}
        manualColumnResize={true}
        manualRowMove={true}
        multiColumnSorting={true}
        minSpareRows={1}
        licenseKey="non-commercial-and-evaluation"
        language={ruRU.languageCode}
        formulas={{ engine: hyperformulaInstance }}
        afterChange={(changes, source) => {
          if (source === 'edit') {
            changes.forEach(([row, prop, oldValue, newValue]) => {
              if (
                [
                  'practice',
                  'lectures',
                  'laboratories',
                  'examsColumn',
                  'other',
                ].includes(prop)
              ) {
                handleDropdownChange(row, prop, newValue);
              }
            });
          }
        }}
        afterGetColHeader={afterGetColHeader}
      >
        {Object.keys(columnTitles).map((key, index) => (
          <HotColumn
            key={index}
            data={key}
            title={`${getColumnName(index)} ${columnTitles[key]}`}
            type={
              [
                'totalWorkloadHours',
                'individualWorks',
                'scolarshipHours',
                'contractHours',
                'hoursPhond',
              ].includes(key)
                ? 'numeric'
                : key === 'teacher'
                ? 'dropdown'
                : [
                    'practice',
                    'lectures',
                    'laboratories',
                    'examsColumn',
                    'other',
                  ].includes(key)
                ? 'dropdown'
                : 'text'
            }
            source={
              [
                'practice',
                'lectures',
                'laboratories',
                'examsColumn',
                'other',
              ].includes(key)
                ? teachers.map(teacher => teacher.name)
                : undefined
            }
            numericFormat={
              [
                'numberOfStudents',
                'numberOfStudentsWithCoef',
                'lectionsByWorkload',
                'practicalByWorkload',
                'labaratoriesByWorkload',
                'exams',
                'individualWorks',
                'scolarshipHours',
                'contractHours',
                'totalWorkloadHours',
                'hoursPhond',
              ].includes(key)
                ? { pattern: '0.00', culture: 'en-US' }
                : undefined
            }
          />
        ))}
      </HotTable>
    </div>
  );
};

export default WorkloadTable;
