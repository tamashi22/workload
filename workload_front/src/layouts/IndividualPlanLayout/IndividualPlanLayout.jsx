import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { EducationTable } from './components/EducationTable';
import { TitleTable } from './components/TitleTable';
import styles from './IndividualPlanLayout.module.scss';

const IndividualPlanLayout = () => {
  const router = useRouter();
  const { tab, id } = router.query;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTabChange = newTab => {
    router.push(
      {
        pathname: `/individualPlan/${id}`,
        query: { tab: newTab },
      },
      undefined,
      { shallow: true },
    );
  };

  const renderTabContent = useMemo(() => {
    switch (tab) {
      case 'educationTable':
        return <EducationTable />;
      case 'educationMetodological':
        // Return your component for this tab
        break;
      case 'sciece':
        // Return your component for this tab
        break;
      case 'organizationMetodological':
        // Return your component for this tab
        break;
      case 'studentsEducation':
        // Return your component for this tab
        break;
      case 'titleTable':
      default:
        return <TitleTable />;
    }
  }, [tab]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={tab === 'titleTable' ? styles.activeTab : ''}
          onClick={() => handleTabChange('titleTable')}
        >
          Титул
        </button>
        <button
          className={tab === 'educationTable' ? styles.activeTab : ''}
          onClick={() => handleTabChange('educationTable')}
        >
          Учебная
        </button>
        <button
          className={tab === 'educationMetodological' ? styles.activeTab : ''}
          onClick={() => handleTabChange('educationMetodological')}
        >
          Учебно-методическая
        </button>
        <button
          className={tab === 'sciece' ? styles.activeTab : ''}
          onClick={() => handleTabChange('sciece')}
        >
          Научно-исследовательская
        </button>
        <button
          className={
            tab === 'organizationMetodological' ? styles.activeTab : ''
          }
          onClick={() => handleTabChange('organizationMetodological')}
        >
          Организационно-методическая
        </button>
        <button
          className={tab === 'studentsEducation' ? styles.activeTab : ''}
          onClick={() => handleTabChange('studentsEducation')}
        >
          Работа по воспитанию студентов
        </button>
      </div>
      <div className={styles.content}>{renderTabContent}</div>
    </div>
  );
};

export default IndividualPlanLayout;
