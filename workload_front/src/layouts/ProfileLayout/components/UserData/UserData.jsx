import React, { useState, useEffect } from 'react';
import { IoMdExit } from 'react-icons/io';
import { AppButton } from '@/components/ui/AppButton';
import styles from './UserData.module.scss';

const UserData = ({ user, onLogout }) => {
  const [isMounted, setIsMounted] = useState(false);

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
              <td>700</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Учебно-методическая</td>
              <td>50</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Организационно-методическая</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Научно-исследовательская</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Работа по воспитанию студентов</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Всего</td>
              <td>750</td>
              <td>0</td>
            </tr>
          </table>
          <AppButton className={styles.linkBtn}>
            <IoMdExit size={20} />
            Перейти в индивидуальный план
          </AppButton>
        </div>
        <AppButton variant="red" className={styles.exitBtn} onClick={onLogout}>
          <IoMdExit size={20} />
          Выйти из аккаунта
        </AppButton>
      </div>
    </div>
  );
};

export default UserData;
