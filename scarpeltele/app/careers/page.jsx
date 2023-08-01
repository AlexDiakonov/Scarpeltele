'use client';
import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Opportunities from './Opportunities';
import { useEffect } from 'react';
import { client } from '../lib/client';
import ContactUs from '../components/ContactUs/ContactUs';
import Values from './Values';
import Benefits from './Benefits';
import PromoSection from './PromoSection';

const Careers = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const getCareers = async (setter) => {
      const query = '*[_type == "careers"] | order(_createdAt desc) ';
      const careers = await client.fetch(query);
      return setter(careers);
    };
    if (careers.length < 1) {
      getCareers(setCareers);
    }
  }, [careers, setCareers]);

  return (
    <Layout>
      <Opportunities careers={[]} />
      <Values />
      <Benefits />
      <PromoSection />
      <ContactUs />
    </Layout>
  );
};

export default Careers;
