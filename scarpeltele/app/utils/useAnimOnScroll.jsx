/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect } from 'react';

export default function useAnimOnScroll(
  ref,
  setTop,
  setPosition,
  currentPosition,
  speedMultiplier = 1,
) {
  const scrollHandler = (setter) => {
    if (ref.current) {
      setter(ref?.current.getBoundingClientRect());
    }
  };

  useEffect(() => {
    if (ref.current && (currentPosition.y / currentPosition.height) * 100 < 0) {
      setTop(
        Math.abs((currentPosition.y / currentPosition.height) * 100) *
          speedMultiplier,
      );
    }
  }, [ref, setTop, currentPosition, speedMultiplier]);

  useEffect(() => {
    if (ref.current) {
      window.addEventListener('scroll', () => scrollHandler(setPosition), true);
      return () => {
        window.removeEventListener(
          'scroll',
          () => scrollHandler(setPosition),
          true,
        );
      };
    }
  }, []);
}
