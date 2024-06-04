import React from 'react';
import clsx from 'clsx';
import { IoMdClose } from 'react-icons/io';
import styles from './AppModalBase.module.scss';

export const AppModalBase = ({
  onClose,
  contentClass,
  children,
  backVisible,
  onBack,
}) => {
  return (
    <div className={styles.container}>
      <div onClick={onClose} className={styles.overlay} />
      <div className={clsx(styles.content, contentClass)}>
        {backVisible ? (
          <button onClick={onBack} className={styles.back}>
            back
          </button>
        ) : null}
        <button onClick={onClose} className={styles.close}>
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};
