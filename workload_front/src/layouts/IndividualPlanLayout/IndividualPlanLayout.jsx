import React, { useEffect, useState } from 'react';
import { TitleTable } from './components/TitleTable';
import styles from './IndividualPlanLayout.module.scss';
const IndividualPlanLayout = () => {
  const [tab, setTab] = useState('titleTable');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={tab === 'titleTable' ? styles.activeTab : ''}
          onClick={() => setTab('titleTable')}
        >
          Титул
        </button>
        <button
          className={tab === 'educationTable' ? styles.activeTab : ''}
          onClick={() => setTab('educationTable')}
        >
          Учебная
        </button>
        <button
          className={tab === 'educationMetodological' ? styles.activeTab : ''}
          onClick={() => setTab('educationMetodological')}
        >
          Учебно-методическая
        </button>
        <button
          className={tab === 'sciece' ? styles.activeTab : ''}
          onClick={() => setTab('sciece')}
        >
          Научно-исследовательская
        </button>

        <button
          className={
            tab === 'organizationMetodological' ? styles.activeTab : ''
          }
          onClick={() => setTab('organizationMetodological')}
        >
          Организационно-методическая
        </button>
        <button
          className={tab === 'studentsEducation' ? styles.activeTab : ''}
          onClick={() => setTab('studentsEducation')}
        >
          Работа по воспитанию студентов
        </button>
      </div>
      <div className={styles.content}>
        {tab == 'titleTable' && <TitleTable />}
      </div>
    </div>
  );
};

export default IndividualPlanLayout;
