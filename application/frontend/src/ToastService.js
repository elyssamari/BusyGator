/*
 * FILE: ToastService.js
 * 
 * AUTHOR(S): Vishal Ramanand Sharma, Samantha Saxton-Getty
 *
 * PURPOSE: This file contains the information for react toast.
 */

import { toast } from 'react-toastify';

export function toastSuccess(title) {
  toast.success(title, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
}

export function toastError(title) {
  toast.error(title, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
}
