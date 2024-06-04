import React from 'react';
import ReactInputMask from 'react-input-mask';
import { TextField } from '../TextField/TextField';

const KG_PHONE_MAX_LENGTH = 13;

export const TextFieldPhone = ({ value, onChange, label, className }) => {
  const onChangeText = event => {
    const phone = event?.currentTarget.value;
    const formattedPhone = `+${phone.replace(/\D+/g, '')}`;
    const isValid = formattedPhone.length === KG_PHONE_MAX_LENGTH;
    onChange({ phone, formattedPhone, isValid });
  };
  return (
    //@ts-ignore
    <ReactInputMask
      formatChars={{
        1: '[0-9]',
        a: '[A-Za-z]',
        '*': '[A-Za-z0-9]',
      }}
      alwaysShowMask
      mask="+996 (111) 11 11 11"
      value={value}
      onChange={onChangeText}
    >
      {inputProps => (
        <TextField label={label} {...inputProps} className={className} />
      )}
    </ReactInputMask>
  );
};
