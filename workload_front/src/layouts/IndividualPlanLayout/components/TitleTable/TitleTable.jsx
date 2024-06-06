import React from 'react';
import { TableControl } from '@/components/TableContol';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';
import { getColumnName } from '@/helpers/getColumnName';
import 'handsontable/dist/handsontable.full.css';
import styles from './TitleTable.module.scss';

const TitleTable = () => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const educationYear = JSON.parse(localStorage.getItem('selectedYear'));

  const columnsConfig = [
    { key: 'type', title: 'Виды работ' },
    {
      key: 'planned',
      title: 'Запланировано часов',
      // type: 'dropdown',
      // source: mappings.direction.options,
    },
    { key: 'fact', title: 'Фактически выполенно часов' },
  ];

  return (
    <div className={styles.wrapper}>
      {/* <TableControl /> */}
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
          // data={transformedData}
          colHeaders={true}
          rowHeaders={true}
          dropdownMenu={true}
          contextMenu={true}
          filters={true}
          columnSorting={true}
          minSpareRows={1}
          licenseKey="non-commercial-and-evaluation"
          language={ruRU.languageCode}
          // formulas={{
          //   engine: HyperFormula.buildEmpty({
          //     licenseKey: 'internal-use-in-handsontable',
          //   }),
          // }}
          // afterChange={handleChange}
          // afterRemoveRow={handleRemoveRow}
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
    </div>
  );
};

export default TitleTable;
