import React, { useState, useMemo } from 'react';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';
import Select, { components } from 'react-select';
import 'handsontable/dist/handsontable.full.css';
import styles from './EducationTable.module.scss';
import { getColumnName } from '@/helpers/getColumnName';
import { TableControl } from '@/components/TableContol';

const EducationTable = () => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const customStyles = {
    container: provided => ({
      ...provided,
      width: 150,
      maxHeight: 40,
      fontSize: 10,
    }),
    placeholder: provided => ({
      ...provided,
      color: '#888',
      fontSize: '12px',
    }),
    menu: provided => ({
      ...provided,
      zIndex: '9999',
      fontSize: '12px',
    }),
    input: provided => ({
      ...provided,
      fontSize: '9px',
    }),
  };

  const options = [
    { value: 'all', label: 'Показать все' },
    { value: 'fall', label: 'Осенний семестр' },
    { value: 'spring', label: 'Весенний семестр' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const allData = [
    {
      name: 'Информатика 1',
      group: 'ИБ-2-23',
      studentsNumber: 24,
      credits: 5,
      semester: 1,
      lectionsByRup: 32,
      lectionsByWorkload: 32,
      practicalByRup: 16,
      practicalByWorkload: 32,
      laborByRup: 16,
      laborByWorkload: 16,
      cwByRup: null,
      cwByacceptance: null,
      cwByLeadership: null,
      groupConsultations: null,
      individualConsultations: null,
      academicAdvisorConsultations: null,
      controlWorksCheks: null,
      headCafedraChecks: null,
      eduPractice: null,
      productionPractice: null,
      tests: null,
      exams: 12,
      diplomManagement: null,
      diplomConsultations: null,
      diplomReviews: null,
      diplomExams: null,
      srs: null,
      totalWorkloadHours: 108,
    },
    {
      name: 'Информатика 1',
      group: 'ИБ-2-23',
      studentsNumber: 24,
      credits: 5,
      semester: 2,
      lectionsByRup: 32,
      lectionsByWorkload: 32,
      practicalByRup: 16,
      practicalByWorkload: 32,
      laborByRup: 16,
      laborByWorkload: 16,
      cwByRup: null,
      cwByacceptance: null,
      cwByLeadership: null,
      groupConsultations: null,
      individualConsultations: null,
      academicAdvisorConsultations: null,
      controlWorksCheks: null,
      headCafedraChecks: null,
      eduPractice: null,
      productionPractice: null,
      tests: null,
      exams: 12,
      diplomManagement: null,
      diplomConsultations: null,
      diplomReviews: null,
      diplomExams: null,
      srs: null,
      totalWorkloadHours: 108,
    },
    {
      name: 'Информатика 2',
      group: 'ИБ-2-24',
      studentsNumber: 30,
      credits: 4,
      semester: 1,
      lectionsByRup: 24,
      lectionsByWorkload: 24,
      practicalByRup: 12,
      practicalByWorkload: 24,
      laborByRup: 12,
      laborByWorkload: 12,
      cwByRup: null,
      cwByacceptance: null,
      cwByLeadership: null,
      groupConsultations: null,
      individualConsultations: null,
      academicAdvisorConsultations: null,
      controlWorksCheks: null,
      headCafedraChecks: null,
      eduPractice: null,
      productionPractice: null,
      tests: null,
      exams: 15,
      diplomManagement: null,
      diplomConsultations: null,
      diplomReviews: null,
      diplomExams: null,
      srs: null,
      totalWorkloadHours: 97,
    },
    {
      name: 'Информатика 2',
      group: 'ИБ-2-24',
      studentsNumber: 30,
      credits: 4,
      semester: 2,
      lectionsByRup: 24,
      lectionsByWorkload: 24,
      practicalByRup: 12,
      practicalByWorkload: 24,
      laborByRup: 12,
      laborByWorkload: 12,
      cwByRup: null,
      cwByacceptance: null,
      cwByLeadership: null,
      groupConsultations: null,
      individualConsultations: null,
      academicAdvisorConsultations: null,
      controlWorksCheks: null,
      headCafedraChecks: null,
      eduPractice: null,
      productionPractice: null,
      tests: null,
      exams: 15,
      diplomManagement: null,
      diplomConsultations: null,
      diplomReviews: null,
      diplomExams: null,
      srs: null,
      totalWorkloadHours: 97,
    },
  ];

  const filteredData = useMemo(() => {
    if (selectedOption.value === 'fall') {
      return allData.filter(item => item.semester % 2 !== 0);
    } else if (selectedOption.value === 'spring') {
      return allData.filter(item => item.semester % 2 === 0);
    } else {
      return allData;
    }
  }, [selectedOption, allData]);
  const dataLength = filteredData.length;
  const summaryRow = {
    name: 'Итого',
    group: '',
    studentsNumber: '',
    credits: '',
    semester: '',
    lectionsByRup: `=SUM(F1:F${dataLength})`,
    lectionsByWorkload: `=SUM(G1:G${dataLength})`,
    practicalByRup: `=SUM(H1:H${dataLength})`,
    practicalByWorkload: `=SUM(I1:I${dataLength})`,
    laborByRup: `=SUM(J1:J${dataLength})`,
    laborByWorkload: `=SUM(K1:K${dataLength})`,
    cwByRup: `=SUM(L1:L${dataLength})`,
    cwByacceptance: `=SUM(M1:M${dataLength})`,
    cwByLeadership: `=SUM(N1:N${dataLength})`,
    groupConsultations: `=SUM(O1:O${dataLength})`,
    individualConsultations: `=SUM(P1:P${dataLength})`,
    academicAdvisorConsultations: `=SUM(Q1:Q${dataLength})`,
    controlWorksCheks: `=SUM(R1:R${dataLength})`,
    headCafedraChecks: `=SUM(S1:S${dataLength})`,
    eduPractice: `=SUM(T1:T${dataLength})`,
    productionPractice: `=SUM(U1:U${dataLength})`,
    tests: `=SUM(V1:V${dataLength})`,
    exams: `=SUM(W1:W${dataLength})`,
    diplomManagement: `=SUM(X1:X${dataLength})`,
    diplomConsultations: `=SUM(Y1:Y${dataLength})`,
    diplomReviews: `=SUM(Z1:Z${dataLength})`,
    diplomExams: `=SUM(AA1:AA${dataLength})`,
    srs: `=SUM(AB1:AB${dataLength})`,
    totalWorkloadHours: `=SUM(AC1:AC${dataLength})`,
  };
  const columnsConfig = [
    {
      key: 'name',
      title: 'Наименование дисциплин и других видов работ',
      width: 200,
    },
    { key: 'group', title: 'группа' },
    { key: 'studentsNumber', title: 'кол-во студентов в группе' },
    { key: 'credits', title: 'кредиты' },
    { key: 'semester', title: 'семестры' },
    { key: 'lectionsByRup', title: 'лекции по учебному плану' },
    { key: 'lectionsByWorkload', title: 'лекции в нагр. кафедры (ч)' },
    { key: 'practicalByRup', title: 'Практика по учебному плану' },
    { key: 'practicalByWorkload', title: 'Практика в нагр. кафедры (ч)' },
    { key: 'laborByRup', title: 'Лабораторные учебному плану' },
    { key: 'laborByWorkload', title: 'Лабораторные. в нагр. Кафедры (ч)' },
    { key: 'cwByRup', title: 'Курс.про-ект.и работы по учебному плану' },
    { key: 'cwByacceptance', title: 'Курс.про-ект.и работы по приему' },
    { key: 'cwByLeadership', title: 'Курс.про-ект.и работы  руководст.' },
    { key: 'groupConsultations', title: 'Консультаций групповых' },
    { key: 'individualConsultations', title: 'Консультаций индивидуальн.' },
    {
      key: 'academicAdvisorConsultations',
      title: 'Консультаций академ. советника',
    },
    { key: 'controlWorksCheks', title: 'проверки контрольных работ' },
    { key: 'headCafedraChecks', title: 'проверки Руков. кафедрой' },
    { key: 'eduPractice', title: 'Учебная практика' },
    { key: 'productionPractice', title: 'Производственная практика' },
    { key: 'tests', title: 'На зачёты' },
    { key: 'exams', title: 'Экзамены' },
    { key: 'diplomManagement', title: 'Дипломное руководство' },
    { key: 'diplomConsultations', title: 'Консультации по диплому' },
    { key: 'diplomReviews', title: 'Рецензирование дипломных проектов' },
    { key: 'diplomExams', title: 'Участие в ГЭК' },
    { key: 'srs', title: 'CРС' },
    { key: 'totalWorkloadHours', title: 'Всего учебных часов по расчету' },
  ];
  const dataWithSummary = [...filteredData, summaryRow];
  const nestedHeaders = [
    [
      'Наименование дисциплин и других видов работ',
      'группа',
      'кол-во студентов в группе',
      'кредиты',
      'семестры',
      { label: 'лекции', colspan: 2 },
      { label: 'Практика', colspan: 2 },
      { label: 'Лабораторные', colspan: 2 },
      { label: 'Курс.про-ект.и работы', colspan: 3 },
      { label: 'Консультаций', colspan: 3 },
      { label: 'проверки', colspan: 2 },
      { label: 'практика', colspan: 2 },

      'На зачёты',
      'Экзамены',
      { label: 'Дипломное руководство', colspan: 4 },
      'CРС',
      'Всего учебных часов по расчету',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      'по учебному плану',
      'зачитывается в нагрузку',
      'по учебному плану',
      'зачитывается в нагрузку',
      'по учебному плану',
      'зачитывается в нагрузку',
      'по учебному плану',
      'по приему',
      'руководст.',
      'групповых',
      'индивидуальн.',
      'академ. советника',
      'контрольных работ',
      'Руков. кафедрой',
      'учебная',
      'производств.',
      '',
      '',
      'руководит. проектиров.',
      'консультац. по разделам',
      'рецензиров. проектов',
      'участие в ГЭК',
    ],
  ];

  const afterGetColHeader = (col, TH) => {
    const header = TH.querySelector('.colHeader');
    if (header) {
      // header.style.transform = 'rotate(-90deg)';
      // header.style.transformOrigin = 'center center';
      // header.style.height = '150px';
      // header.style.whiteSpace = 'nowrap';
      // header.style.display = 'flex';
      // header.style.alignItems = 'center';
      // header.style.justifyContent = 'center';
      // header.style.textWrap = 'wrap';
    }
  };

  return (
    <div className={styles.wrapper}>
      <TableControl>
        <Select
          styles={customStyles}
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
        />
      </TableControl>
      <div className={styles.table}>
        <HotTable
          data={dataWithSummary}
          colHeaders={true}
          rowHeaders={true}
          dropdownMenu={true}
          contextMenu={true}
          filters={true}
          columnSorting={true}
          comments={true}
          minSpareRows={1}
          preventOverflow="horizontal"
          autoColumnSize={false}
          licenseKey="non-commercial-and-evaluation"
          language={ruRU.languageCode}
          manualRowMove={true}
          manualColumnResize={true}
          manualRowResize={true}
          nestedHeaders={nestedHeaders}
          formulas={{
            engine: HyperFormula.buildEmpty({
              licenseKey: 'internal-use-in-handsontable',
            }),
          }}
          afterGetColHeader={afterGetColHeader}
        >
          {columnsConfig.map((column, index) => (
            <HotColumn
              width={column.width}
              key={index}
              data={column.key}
              title={`${getColumnName(index)} ${column.title}`}
              type={column.type || 'text'}
              {...(column.type === 'dropdown' && { source: column.source })}
            />
          ))}
        </HotTable>
      </div>
    </div>
  );
};

export default EducationTable;
