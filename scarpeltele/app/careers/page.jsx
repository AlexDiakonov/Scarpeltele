import Layout from '../components/Layout/Layout';
import Opportunities from './Opportunities';

import { client } from '../lib/client';
import ContactUs from '../components/ContactUs/ContactUs';
import Values from './Values';
import Benefits from './Benefits';
import PromoSection from './PromoSection';

export const metadata = {
  title: 'Discover career opportunities with Scarpel',
  description:
    "As our business continues to grow rapidly, we're on the lookout for experienced and highly motivated professionals to join our team. Could that be you?",
};

const Careers = async () => {
  const query = '*[_type == "careers"] | order(_createdAt desc) ';
  const careers = await client.fetch(query);

  return (
    <Layout>
      <Opportunities careers={careers} />
      <Values />
      <Benefits />
      <PromoSection />
      <ContactUs />
    </Layout>
  );
};

export default Careers;
