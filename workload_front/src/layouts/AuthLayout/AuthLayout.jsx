import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';
import Select from 'react-select';
import { jwtDecode } from 'jwt-decode';
import AuthWrapper from './components/AuthWrapper';
import { TextField } from '@/components/ui/TextField';
import { AppButton } from '@/components/ui/AppButton';
import AuthApi from '@/services/AuthApi'; // Import the AuthApi service

import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [year, setYear] = useState({ value: 1, label: '2023-2024' });
  const [error, setError] = useState(null);
  const router = useRouter();
  const options = [
    { value: 0, label: '2022-2023' },
    { value: 1, label: '2023-2024' },
    { value: 2, label: '2024-2025' },
  ];

  const onLogin = async event => {
    event.preventDefault();
    try {
      const data = await AuthApi.login(email, password);
      console.log('Login successful', data);

      // Save access token to local storage
      localStorage.setItem('accessToken', data.accessToken);

      // Decode the token to get user data
      const userData = jwtDecode(data.accessToken);
      console.log('User data', userData);

      // Save user data to local storage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Save selected year to local storage
      localStorage.setItem('selectedYear', JSON.stringify(year));

      // Redirect to home page or another route
      router.push('/');
    } catch (error) {
      setError(error.message || 'An error occurred');
      console.error('Login error', error);
    }
  };

  return (
    <AuthWrapper>
      <h2 className={styles.title}>Вход</h2>
      <form onSubmit={onLogin}>
        <div className={styles.input}>
          <TextField
            label="Email"
            type="email"
            iconLeft={<MdOutlineAlternateEmail size={20} />}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextField
            label="Пароль"
            type="password"
            iconLeft={<TbPasswordUser size={20} />}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <span>Учебный год</span>
        <Select
          options={options}
          placeholder="Учебный год"
          value={year}
          onChange={selectedOption => setYear(selectedOption)}
        />

        <div className={styles.wrapper}>
          <input type="checkbox" className={styles.checkBox} checked />
          <span>
            Соглашаюсь с <Link href="#">политикой конфиденциальности </Link>и
            <Link href="#"> условиями пользования</Link>
          </span>
        </div>

        <AppButton className={styles.button} type="submit">
          Войти
        </AppButton>
      </form>
      {error && <div className={styles.error}>Непральный пароль или email</div>}
    </AuthWrapper>
  );
};

export default AuthLayout;
