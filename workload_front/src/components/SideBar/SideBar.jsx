import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';
import { IoMdClose } from 'react-icons/io';
import { MdCastForEducation } from 'react-icons/md';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { FaNewspaper } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Logo from '@/assets/images/logo.png';

import styles from './SideBar.module.scss';

const SideBar = ({ onClose }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(null);
  const token = localStorage.getItem('accessToken');
  const user = jwtDecode(token);

  useEffect(() => {
    const closeBar = () => {
      onClose();
      setCurrent(null);
    };
    router.events.on('routeChangeStart', closeBar);
    return () => {
      router.events.off('routeChangeStart', closeBar);
    };
  }, [router.events, onClose]);
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.categoriesWrapper}>
          <Image src={Logo} className={styles.logo} alt="logo" />
          <Link
            href="/"
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <FaNewspaper />
            </span>
            <span className={styles.categoryName}>Обьявления</span>
          </Link>
          <Link
            href="/rup"
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <MdCastForEducation />
            </span>
            <span className={styles.categoryName}>Учебный План</span>
          </Link>

          <Link
            href="/workload"
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <MdOutlineWorkHistory />
            </span>
            <span className={styles.categoryName}>Нагрузка</span>
          </Link>

          <Link
            href={`/profile/${user.id}`}
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <CgProfile />
            </span>
            <span className={styles.categoryName}>Профиль</span>
          </Link>
          <Link
            href="/individulPlan"
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <CgProfile />
            </span>
            <span className={styles.categoryName}>Идивидуальный план</span>
          </Link>

          <Link
            href="/groups"
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <PiStudentFill />
            </span>
            <span className={styles.categoryName}>Группы</span>
          </Link>
          <Link
            href="/users"
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <FaUsers />
            </span>
            <span className={styles.categoryName}>Пользователи</span>
          </Link>
          <Link
            href="/analysis"
            className={clsx(
              styles.itemWrapper,
              // styles.itemWrapperActive
            )}
          >
            <span className={styles.categoryIcon}>
              <FaNewspaper />
            </span>
            <span className={styles.categoryName}>Аналитика</span>
          </Link>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose}>
        <button onClick={onClose} className={styles.close}>
          <IoMdClose size={30} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
