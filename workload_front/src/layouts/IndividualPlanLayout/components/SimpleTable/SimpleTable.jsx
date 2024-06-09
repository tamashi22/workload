import React from 'react';
import { TableControl } from '@/components/TableContol';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';
import { getColumnName } from '@/helpers/getColumnName';
import 'handsontable/dist/handsontable.full.css';
const SimpleTable = ({ data, isFull }) => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const columnsConfig = [
    { key: 'name', title: 'Наименование работ', width: 200 },
    {
      key: 'dateStart',
      title: 'Начало',
      type: 'date',
    },
    {
      key: 'dateEnd',
      title: 'Конец',
      type: 'date',
    },
    {
      key: 'plan',
      title: 'План (ч)',
    },
    {
      key: 'fact',
      title: 'Факт (ч)',
    },
    {
      key: 'flag',
      title: 'Отметка зав. Кафедры о выполнении',
      type: 'checkbox',
      readOnly: true,
      width: 100,
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
          data={data && data}
          colHeaders={true}
          rowHeaders={true}
          dropdownMenu={true}
          contextMenu={true}
          filters={true}
          columnSorting={true}
          comments={true}
          minSpareRows={1}
          licenseKey="non-commercial-and-evaluation"
          language={ruRU.languageCode}
          formulas={{
            engine: HyperFormula.buildEmpty({
              licenseKey: 'internal-use-in-handsontable',
            }),
          }}
          // afterChange={handleChange}
          // afterRemoveRow={handleRemoveRow}
          afterGetColHeader={afterGetColHeader}
        >
          {columnsConfig.map((column, index) => (
            <HotColumn
              key={index}
              width={column.width}
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

export default SimpleTable;
