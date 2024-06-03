import React from 'react';
import styles from './AuthWrapper.module.scss';
const AuthWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default AuthWrapper;
