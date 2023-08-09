import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactUs from '../components/ContactUs/ContactUs';
import FAQ from '../components/FAQ/FAQ';

export const metadata = {
  title: 'Scarpel: Frequently Asked Questions',
  description: 'Get answers to all the most frequently asked questions',
};
const page = () => {
  return (
    <Layout>
      <FAQ />
      <ContactUs />
    </Layout>
  );
};

export default page;
