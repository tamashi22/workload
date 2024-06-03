// src/components/Toast.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return <ToastContainer />;
};

export const showToast = (message, type = 'success') => {
  toast(message, { type, position: 'bottom-left' });
};

export default Toast;
