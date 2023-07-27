'use client';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
