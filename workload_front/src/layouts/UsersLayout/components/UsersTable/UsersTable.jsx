import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import HyperFormula from 'hyperformula';
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa';
import { getColumnName } from '@/helpers/getColumnName';
import { AppButton } from '@/components/ui/AppButton';
import 'handsontable/dist/handsontable.full.css';
import styles from './UsersTable.module.scss';

const dateRenderer = (instance, td, row, col, prop, value, cellProperties) => {
  const formattedDate = value ? moment(value).format('DD/MM/YYYY') : '';
  td.innerText = formattedDate;
  return td;
};

const actionRenderer = (
  instance,
  td,
  row,
  col,
  prop,
  value,
  cellProperties,
) => {
  const profileButton = document.createElement('button');
  profileButton.className = styles.actionButton;
  ReactDOM.render(<FaUserEdit />, profileButton);
  profileButton.onclick = () => {
    // Handle profile button click
    console.log('Go to Profile:', row);
  };

  const deleteButton = document.createElement('button');
  deleteButton.className = styles.actionButton;
  ReactDOM.render(<FaTrashAlt />, deleteButton);
  deleteButton.onclick = () => {
    // Handle delete button click
    console.log('Delete user:', row);
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?',
    );
    if (confirmDelete) {
      const updatedUsers = [...instance.getData()];
      updatedUsers.splice(row, 1); // Remove the user from the data array
      instance.loadData(updatedUsers); // Reload the data into Handsontable
    }
  };

  td.innerHTML = ''; // Clear the cell
  td.appendChild(profileButton);
  td.appendChild(deleteButton);
  return td;
};

const UsersTable = ({ users, setUsers }) => {
  registerAllModules();
  registerLanguageDictionary(ruRU);

  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: 'internal-use-in-handsontable',
  });

  const handleAddRow = newRow => {
    setUsers(prevUsers => [...prevUsers, newRow]);
  };

  const handleUpdateRow = (row, prop, newValue) => {
    const updatedUser = { ...users[row], [prop]: newValue };
    setUsers(prevUsers =>
      prevUsers.map((user, index) => (index === row ? updatedUser : user)),
    );
  };

  const handleRemoveRow = row => {
    setUsers(prevUsers => prevUsers.filter((_, index) => index !== row));
  };

  const handleAfterChange = (changes, source) => {
    if (source === 'loadData' || !changes) return;

    changes.forEach(([row, prop, oldValue, newValue]) => {
      if (newValue !== oldValue) {
        if (row >= users.length) {
          handleAddRow({ [prop]: newValue });
        } else {
          handleUpdateRow(row, prop, newValue);
        }
      }
    });
  };

  const handleAfterRemoveRow = (index, amount) => {
    for (let i = 0; i < amount; i++) {
      handleRemoveRow(index + i);
    }
  };

  return (
    <div>
      <HotTable
        data={users}
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
          engine: hyperformulaInstance,
        }}
        afterChange={handleAfterChange}
        afterRemoveRow={handleAfterRemoveRow}
      >
        <HotColumn data="name" title={`${getColumnName(0)} Имя`} />
        <HotColumn data="email" title={`${getColumnName(1)} Email`} />
        <HotColumn
          data="stavka"
          title={`${getColumnName(2)} Ставка`}
          type="numeric"
        />
        <HotColumn data="type" title={`${getColumnName(3)} Тип штата`} />
        <HotColumn
          data="dateBirth"
          title={`${getColumnName(4)} Дата рождения`}
          type="date"
          renderer={dateRenderer}
        />
        <HotColumn data="degree" title={`${getColumnName(5)} Степень`} />
        <HotColumn data="numberOfPhone" title={`${getColumnName(7)} Телефон`} />
        <HotColumn
          data="actions"
          title={`${getColumnName(8)}`}
          renderer={actionRenderer}
        />
      </HotTable>
    </div>
  );
};

export default UsersTable;
