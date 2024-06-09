import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { EducationTable } from './components/EducationTable';
import { TitleTable } from './components/TitleTable';
import ScienceTable from './components/ScieceTable';
import { SimpleTable } from './components/SimpleTable';
import styles from './IndividualPlanLayout.module.scss';

const IndividualPlanLayout = () => {
  const router = useRouter();
  const { tab, id } = router.query;
  const [isMounted, setIsMounted] = useState(false);
  const [isFull, setFull] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedFillPlan = localStorage.getItem('fillPlan');
    if (storedFillPlan) {
      setFull(storedFillPlan === 'true');
    }
  }, []);
  const simpleData = [
    {
      name: 'Участие в заседаниях кафедры ПОКС',
      dateStart: '10/01/2024',
      dateEnd: '10/06/2024',
      plan: 30,
      fact: isFull ? 30 : 0,
      flag: false,
    },
  ];
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

  const fillPlan = () => {
    const newValue = !isFull;
    setFull(newValue);
    localStorage.setItem('fillPlan', newValue);
  };

  const renderTabContent = useMemo(() => {
    switch (tab) {
      case 'educationTable':
        return <EducationTable />;
      case 'educationMetodological':
        return <SimpleTable />;
      case 'sciece':
        return <ScienceTable />;
      case 'organizationMetodological':
        return <SimpleTable data={simpleData} isFull={isFull} />;
      case 'studentsEducation':
        return <SimpleTable />;
      case 'titleTable':
      default:
        return <TitleTable fillPlan={fillPlan} isFull={isFull} />;
    }
  }, [tab, isFull]);

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
