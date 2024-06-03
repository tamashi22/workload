import Image from 'next/image';
import React from 'react';
import styles from './AnnouncementsLayout.module.scss';

const AnnouncementsLayout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Обьявления</h1>
      <div className={styles.annoucement}>
        <div className={styles.userSection}>
          <img
            src="https://w7.pngwing.com/pngs/429/434/png-transparent-computer-icons-icon-design-business-administration-admin-icon-hand-monochrome-silhouette-thumbnail.png"
            alt="User Avatar"
            className={styles.userImage}
          />
          <div className={styles.userInfo}>
            <span>
              <h2 className={styles.userName}>Admin</h2>
              <p className={styles.userEmail}>admin@admin.com</p>
            </span>
            <span className={styles.userEmail}>30.05.2024</span>
          </div>
        </div>
        <div className={styles.announcementSection}>
          <img
            src="https://iemspb.ru/wp-content/uploads/2023/10/%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B.png"
            className={styles.image}
            alt="Announcement"
          />
          <p className={styles.description}>
            В период с 01.06.2024-03.01.2024 Будут вестистись технические работы
          </p>
        </div>
      </div>
      <div className={styles.annoucement}>
        <div className={styles.userSection}>
          <img
            src="https://w7.pngwing.com/pngs/429/434/png-transparent-computer-icons-icon-design-business-administration-admin-icon-hand-monochrome-silhouette-thumbnail.png"
            alt="User Avatar"
            className={styles.userImage}
          />
          <div className={styles.userInfo}>
            <span>
              <h2 className={styles.userName}>Admin</h2>
              <p className={styles.userEmail}>admin@admin.com</p>
            </span>
            <span className={styles.userEmail}>30.05.2024</span>
          </div>
        </div>
        <div className={styles.announcementSection}>
          <img
            src="https://img.freepik.com/free-vector/team-concept-illustration_114360-838.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716854400&semt=ais_user"
            className={styles.image}
            alt="Announcement"
          />
          <p className={styles.description}>
            Уважаемые коллеги! 05.06.2024 в 14.00 в актовом зале состоится
            совещание всего преподаватьльского состава
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsLayout;
