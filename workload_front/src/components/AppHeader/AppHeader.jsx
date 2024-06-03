import React, { useState } from 'react';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { SideBar } from '../SideBar';
import styles from './AppHeader.module.scss';

import Logo from '@/assets/images/logo.png';
function AppHeader() {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
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
        <Image src={Logo} className={styles.logo} alt="logo" />
      </div>
    </div>
  );
}

export default AppHeader;
