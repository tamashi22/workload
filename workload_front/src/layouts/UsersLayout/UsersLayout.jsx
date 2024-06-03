import React, { useEffect, useState, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';
import { IoMdPersonAdd } from 'react-icons/io';
import { TableControl } from '@/components/TableContol';
import { UsersTable } from './components/UsersTable';
import UsersApi from '@/services/UsersApi';
import { AppButton } from '@/components/ui/AppButton';
import styles from './Userslayout.module.scss';

const UsersLayout = () => {
  const [users, setUsers] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const user = jwtDecode(token);
        const data = await UsersApi.findAllByCafedraId(user.cafedraId);
        setUsers(data);
      } catch (error) {
        console.error('Error loading users', error);
      }
    };

    loadUsers();
  }, []);

  const saveUsers = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const user = jwtDecode(token);
      const cafedraId = user.cafedraId;

      const updatedUsers = users.map(user => ({
        ...user,
        cafedraId: cafedraId,
      }));

      for (const user of updatedUsers) {
        if (user.id) {
          await UsersApi.update(user.id, user);
        } else {
          await UsersApi.create(user);
        }
      }

      alert('Users saved successfully!');
    } catch (error) {
      console.error('Error saving users', error);
      alert('Failed to save users');
    }
  };

  const deleteUser = async id => {
    try {
      await UsersApi.remove(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div>
      <TableControl onSave={saveUsers} printRef={componentRef} />
      <div className={styles.wrapper}>
        <h2>Пользователи</h2>
        <AppButton className={styles.createBtn} fullWidth={false}>
          <IoMdPersonAdd /> Cоздать нового пользователя
        </AppButton>
      </div>
      <div ref={componentRef}>
        <UsersTable users={users} setUsers={setUsers} />
      </div>
    </div>
  );
};

export default UsersLayout;
