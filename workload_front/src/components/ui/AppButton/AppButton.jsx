import React from 'react';
import clsx from 'clsx';
import styles from './AppButton.module.scss';

export const AppButton = ({
  variant = 'blue',
  children,
  fullWidth = true,
  className,
  disabledVariant = 'color',
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        styles['app-button'],
        styles[`app-button--${variant}`],
        styles[`app-button--disabled__${disabledVariant}`],
        fullWidth ? styles['app-button__full'] : '',
        className,
      )}
    >
      {children}
    </button>
  );
};
