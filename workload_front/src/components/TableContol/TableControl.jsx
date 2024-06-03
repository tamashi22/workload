import React from 'react';
import Select, { components } from 'react-select';
import { FaRegSave } from 'react-icons/fa';
import { IoPrintOutline } from 'react-icons/io5';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FaRegFilePdf } from 'react-icons/fa6';
import { FaRegFileWord } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import { AppButton } from '../ui/AppButton';
import styles from './TableContol.module.scss';

const { Option } = components;
const CustomSelectOption = props => (
  <Option {...props}>
    <div className={styles.selectOption}>
      {props.data.icon}
      {props.data.label}
    </div>
  </Option>
);

const CustomSelectValue = props => (
  <div className={styles.selectOption}>
    {props.data.icon}
    {props.data.label}
  </div>
);
const options = [
  { value: 'Excel', label: 'Excel', icon: <SiMicrosoftexcel /> },
  { value: 'PDF', label: 'PDF', icon: <FaRegFilePdf /> },
  { value: 'Word', label: 'Word', icon: <FaRegFileWord /> },
];
const customStyles = {
  container: provided => ({
    ...provided,
    width: 150,
    maxHeight: 40,
  }),
  placeholder: provided => ({
    ...provided,
    color: '#888',
    fontSize: '12px',
  }),
  menu: provided => ({
    ...provided,
    zIndex: '9999',
  }),
};
const TableControl = ({ children, onSave, printRef }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonsWrap}>
          <AppButton className={styles.button} onClick={onSave}>
            <FaRegSave size={20} />
            Сохранить
          </AppButton>
          <ReactToPrint
            trigger={() => (
              <AppButton className={styles.button}>
                <IoPrintOutline size={20} />
                Печать
              </AppButton>
            )}
            content={() => printRef.current}
          />
          {children}
        </div>
        <Select
          options={options}
          components={{
            Option: CustomSelectOption,
            SingleValue: CustomSelectValue,
          }}
          placeholder="Экспортировать"
          styles={customStyles}
        />
      </div>
      <label className={styles.label}>
        <input type="checkbox" />
        Автосохранение
      </label>
    </div>
  );
};

export default TableControl;
