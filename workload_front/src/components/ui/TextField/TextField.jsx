import React from 'react';

import clsx from 'clsx';

import styles from './TextField.module.scss';

export const TextField = React.forwardRef(
  (
    {
      buttonTitle,
      onChangeText,
      iconLeft,
      label,
      withError,
      errors,
      className,
      onClear,
      ...props
    },
    ref,
  ) => {
    return (
      <div>
        {label ? (
          <div
            className={clsx(styles.label, errors ? styles.labelError : null)}
          >
            {label}
          </div>
        ) : null}

        <div className={styles.container}>
          {iconLeft ? (
            <div className={styles['icon-left']}>{iconLeft}</div>
          ) : null}
          <input
            ref={ref}
            className={clsx(
              styles.input,
              className,
              iconLeft ? styles[`input--iconLeft`] : '',
              buttonTitle ? styles['input--button'] : '',
            )}
            {...props}
          />
          {buttonTitle ? (
            <button onClick={buttonClick} className={clsx(styles.button)}>
              {buttonTitle}
            </button>
          ) : null}
        </div>
      </div>
    );
  },
);

TextField.displayName = 'TextField';
