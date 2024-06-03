import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { IoMdClose } from 'react-icons/io';
import { MdCastForEducation } from 'react-icons/md';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { FaNewspaper } from 'react-icons/fa';
import Logo from '@/assets/images/logo.png';
import styles from './SideBar.module.scss';

const SideBar = ({ onClose }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(null);

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
