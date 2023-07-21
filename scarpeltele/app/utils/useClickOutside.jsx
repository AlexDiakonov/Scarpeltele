'use client';
import { useEffect } from 'react';

export default function useClickOutside(elementRef, callback, isOpen) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      event.preventDefault();

      if (!elementRef.current.contains(event.target) && isOpen) {
        callback();
      }
      return;
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [elementRef, callback, isOpen]);
}
