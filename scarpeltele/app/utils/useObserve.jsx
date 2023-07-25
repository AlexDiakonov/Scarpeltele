'use client';
// import { useEffect, useState, useMemo } from 'react';

// const useObserve = (ref) => {
//   const [isIntersecting, setIntersecting] = useState(false);

//   const observer = useMemo(
//     () =>
//       new IntersectionObserver(([entry]) => {
//         console.log(entry);
//         setIntersecting(entry.isIntersecting);
//       }),
//     [ref],
//   );

//   useEffect(() => {
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return isIntersecting;
// };

// export default useObserve;
