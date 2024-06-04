import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserData } from './components/UserData';
import { UserForm } from './components/UserForm';
import UsersApi from '@/services/UsersApi';
import styles from './ProfileLayout.module.scss';
const ProfileLayout = () => {
  const router = useRouter();
  const { id } = router.query; // Get userId from URL
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/signIn');
  };
  useEffect(() => {
    if (id) {
      const fetchUserData = async () => {
        try {
          const userData = await UsersApi.findOneById(id);
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [id]);
  if (!user) return <div>Loading...</div>;
  return (
    <div className={styles.wrapper}>
      <UserForm user={user} />
      <UserData user={user} onLogout={handleLogout} />
    </div>
  );
};

export default ProfileLayout;
