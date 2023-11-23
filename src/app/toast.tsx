'use client';
import { Slide, ToastContainer } from 'react-toastify';

export const Toast = () => (
  <ToastContainer
    autoClose={5000}
    closeButton
    closeOnClick
    draggable
    pauseOnHover
    transition={Slide}
    position="top-right"
    bodyClassName="text-black/60 text-sm italic"
    toastClassName="!rounded-none"
    theme="light"
  />
);
