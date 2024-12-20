import RootLayout from "./layout.js";
import Layout from "./components/Layout/Layout.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Solution from "./components/SolutionSection/Solution.jsx";
import WhyUs from "./components/WhyUsSection/WhyUs.jsx";
import Partners from "./components/PartnersSection/Partners.jsx";
import About from "./components/About/About.jsx";
import Careers from "./components/CareersSection/Careers.jsx";
import Events from "./components/Events/Events.jsx";
import ReachYourAudience from "./components/ReachYouAudience/ReachYourAudience.jsx";
import Achievements from "./components/Achievements/Achievements.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQ from "./components/FAQ/FAQ.jsx";
import { client } from "./lib/client.js";
import Script from "next/script.js";

const Home = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc) [0...3]`; // Query to fetch last 3 posts
  const posts = await client.fetch(query);

  const queryEvents = `*[_type == "events"] | order(eventDate.startDate asc)`;
  const events = await client.fetch(queryEvents);
  return (
    <RootLayout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3VN8S5R0MT" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-3VN8S5R0MT');
        `}
      </Script>
      <Layout>
        <HeroSection />
        <Solution />
        <WhyUs />
        <Partners />
        <About />
        <Careers />
        <Events events={events} />
        <ReachYourAudience />
        <Achievements />
        <ContactUs />
        <Blog posts={posts} />
        <FAQ />
      </Layout>
    </RootLayout>
  );
};

export default Home;
