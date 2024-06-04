import React from 'react';
import Image from 'next/image';

import styles from './AppImage.module.scss';

export const AppImage = ({ src, alt }) => {
  const [error, setError] = React.useState(false);
  const onError = React.useCallback(() => {
    setError(true);
  }, []);
  return src && !error ? (
    <Image fill onError={onError} src={src} alt={alt} />
  ) : (
    <div className={styles.noPhoto}>no Photo</div>
  );
};
