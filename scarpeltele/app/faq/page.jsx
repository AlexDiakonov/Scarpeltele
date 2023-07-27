import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactUs from '../components/ContactUs/ContactUs';
import FAQ from '../components/FAQ/FAQ';

const page = () => {
  return (
    <Layout>
      <FAQ />
      <ContactUs />
    </Layout>
  );
};

export default page;
