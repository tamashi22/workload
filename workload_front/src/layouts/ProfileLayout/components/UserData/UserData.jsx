import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { IoMdExit } from 'react-icons/io';
import { GrPlan } from 'react-icons/gr';
import { AppButton } from '@/components/ui/AppButton';
import styles from './UserData.module.scss';

const UserData = ({ user, onLogout }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentUser, setUser] = useState(null);
  const router = useRouter();

  const gotoPlan = () => {
    router.push(`/individualPlan/${user.id}?tab=titleTable`);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
    // Or a loading spinner
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.userImg}>
        <img
          src="https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg"
          className={styles.image}
        ></img>
      </div>
      <div className={styles.userInfo}>
        <p className={styles.name}>{user.name}</p>
        <p className={styles.degree}>{user.degree}</p>

        <div className={styles.userPlan}>
          <h5>ГОДОВАЯ НАГРУЗКА </h5>
          <table>
            <tr>
              <th>Вид работы</th>
              <th>Запланировано</th>
              <th>Выполнено</th>
            </tr>
            <tr>
              <td>Учебная</td>
              <td>{user.name == 'Мария К' ? '410' : '0'}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Учебно-методическая</td>
              <td>{user.name == 'Мария К' ? '350' : '0'}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Организационно-методическая</td>
              <td>{user.name == 'Мария К' ? '30' : '0'}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Научно-исследовательская</td>
              <td>{user.name == 'Мария К' ? '30' : '0'}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Работа по воспитанию студентов</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Всего</td>
              <td>{user.stavka * 850}</td>
              <td>0</td>
            </tr>
          </table>
          <AppButton className={styles.linkBtn} onClick={gotoPlan}>
            <GrPlan size={20} />
            Перейти в индивидуальный план
          </AppButton>
        </div>
        {currentUser.id === user.id && (
          <AppButton
            variant="red"
            className={styles.exitBtn}
            onClick={onLogout}
          >
            <IoMdExit size={20} />
            Выйти из аккаунта
          </AppButton>
        )}
      </div>
    </div>
  );
};

export default UserData;
