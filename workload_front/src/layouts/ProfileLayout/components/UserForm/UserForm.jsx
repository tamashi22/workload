import React from 'react';
import { useForm } from 'react-hook-form';
import UsersApi from '@/services/UsersApi';
import { TextField } from '@/components/ui/TextField';
import { TextFieldPhone } from '@/components/ui/TextFieldPhone';
import { AppButton } from '@/components/ui/AppButton';
import styles from './UserForm.module.scss';

const UserForm = ({ user }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      degree: user.degree,
      stavka: user.stavka,
      dateBirth: user.dateBirth?.split('T')[0],
      numberOfPhone: user.numberOfPhone,
      type: user.type,
    },
  });

  const onSubmit = async data => {
    try {
      await UsersApi.update(user.id, data);
      alert('User data updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Failed to update user data');
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Общая информация</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <TextField
            label="ФИО"
            className={styles.input}
            {...register('name')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            label="Email"
            className={styles.input}
            type="email"
            {...register('email')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            label="Должность"
            className={styles.input}
            {...register('degree')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            label="Ставка"
            className={styles.input}
            {...register('stavka')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            label="Дата рождения"
            className={styles.input}
            type="date"
            {...register('dateBirth')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            label="Номер телефона"
            className={styles.input}
            {...register('numberOfPhone')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            label="Тип штата"
            className={styles.input}
            {...register('type')}
          />
        </div>
        <AppButton type="submit">Сохранить</AppButton>
      </form>
      <h3 className={styles.title2}>Изменить пароль</h3>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <TextField
            label="Текуший пароль"
            className={styles.input}
            type="password"
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextField
            label="Новый пароль"
            className={styles.input}
            type="password"
          />
        </div>
        <AppButton>Изменить пароль</AppButton>
      </form>
    </div>
  );
};

export default UserForm;
