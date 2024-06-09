import React from 'react';
import { TableControl } from '@/components/TableContol';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';

import 'handsontable/dist/handsontable.full.css';
const ScienceTable = () => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const columnsConfig = [
    {
      key: 'name',
      title:
        'Шифр, наименование программ и проблем (общесоюзных или республиканских и др. НИР)',
      width: 300,
    },
    {
      key: 'stepsName',
      title: 'Наименование этапов работ',
      width: 150,
    },
    {
      key: 'results',
      title: 'Ожидаемые результаты',
      width: 150,
    },
    {
      key: 'plan',
      title: 'План (ч)',
      width: 90,
    },
    {
      key: 'fact',
      title: 'Факт (ч)',
      width: 90,
    },
    {
      key: 'flag',
      title: 'Отметка зав. Кафедры о выполнении',
      width: 100,
      type: 'checkbox',
      readOnly: true,
    },
  ];
  const afterGetColHeader = (col, TH) => {
    const header = TH.querySelector('.colHeader');
    if (header) {
      header.style.display = 'flex';
      header.style.alignItems = 'center';
      header.style.textWrap = 'wrap';
      header.style.justifyContent = 'center';
    }
  };
  return (
    <div>
      <TableControl />
      <div>
        <HotTable
          // data={transformedData}
          colHeaders={true}
          rowHeaders={true}
          dropdownMenu={true}
          contextMenu={true}
          filters={true}
          autoColumnSize={false}
          columnSorting={true}
          comments={true}
          minSpareRows={1}
          licenseKey="non-commercial-and-evaluation"
          language={ruRU.languageCode}
          // formulas={{
          //   engine: HyperFormula.buildEmpty({
          //     licenseKey: 'internal-use-in-handsontable',
          //   }),
          // }}
          // afterChange={handleChange}
          //   afterRemoveRow={handleRemoveRow}
          afterGetColHeader={afterGetColHeader}
        >
          {columnsConfig.map((column, index) => (
            <HotColumn
              width={column.width}
              key={index}
              data={column.key}
              title={`${column.title}`}
              type={column.type || 'text'}
              {...(column.type === 'dropdown' && { source: column.source })}
              readOnly={column.readOnly}
            />
          ))}
        </HotTable>
      </div>
    </div>
  );
};

export default ScienceTable;
