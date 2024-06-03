import React from 'react';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';
import { getColumnName } from '@/helpers/getColumnName';
import { useDropdownMappings } from '@/hooks/useDropdownMappings';
import 'handsontable/dist/handsontable.full.css';

const GroupTable = ({ groups, setGroups }) => {
  registerAllModules();
  registerLanguageDictionary(ruRU);
  const { transformForDisplay, mappings } = useDropdownMappings({
    direction: [
      { id: 1, name: 'ПИ' },
      { id: 2, name: 'ИБ' },
      { id: 3, name: 'ПИ иcоп' },
    ],
  });

  const transformedData = transformForDisplay(groups);

  const handleChange = (changes, source) => {
    if (source === 'loadData' || !changes) {
      return;
    }

    const newData = [...groups];
    changes.forEach(([row, prop, oldValue, newValue]) => {
      newData[row][prop] = newValue;
    });
    setGroups(newData);
  };

  const handleRemoveRow = (index, amount) => {
    const newData = [...groups];
    newData.splice(index, amount);
    setGroups(newData);
  };

  const columnsConfig = [
    { key: 'name', title: 'Группа' },
    {
      key: 'direction',
      title: 'Направление',
      type: 'dropdown',
      source: mappings.direction.options,
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
    <div>
      <h2>Группы</h2>
      <HotTable
        data={transformedData}
        colHeaders={true}
        rowHeaders={true}
        dropdownMenu={true}
        contextMenu={true}
        filters={true}
        columnSorting={true}
        minSpareRows={1}
        licenseKey="non-commercial-and-evaluation"
        language={ruRU.languageCode}
        formulas={{
          engine: HyperFormula.buildEmpty({
            licenseKey: 'internal-use-in-handsontable',
          }),
        }}
        afterChange={handleChange}
        afterRemoveRow={handleRemoveRow}
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
  );
};

export default GroupTable;
