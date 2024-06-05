import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { FaUserAlt } from 'react-icons/fa';
import { SideBar } from '../SideBar';
import styles from './AppHeader.module.scss';
import events from '@/helpers/signInEvents'; // Import the custom event system

import Logo from '@/assets/images/logo.png';
import Link from 'next/link';

function AppHeader() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = () => {
      const userData = localStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };

    // Update user state on component mount
    updateUser();

    // Subscribe to custom events
    events.subscribe('userChange', updateUser);

    return () => {
      // Unsubscribe from custom events
      events.unsubscribe('userChange', updateUser);
    };
  }, []);

  const onOpen = () => {
    if (user) {
      setOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {open && <SideBar onClose={onClose} />}
      <div className={styles.container}>
        <button onClick={onOpen} className={styles.button}>
          <CiMenuBurger size={25} />
        </button>
        <div className={styles.linksContainer}>
          <Link
            href={user ? `/profile/${user.id}` : '/signIn'}
            className={styles.link}
          >
            <FaUserAlt size={20} />
            {user ? `Профиль` : 'Войти'}
          </Link>
          <Image src={Logo} className={styles.logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
