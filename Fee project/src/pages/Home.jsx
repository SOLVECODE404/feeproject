import data from '../Data.json';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Skill from '../components/Skill/Skill';
import BlogSection from '../components/Blog/BlogSection';
import ReviewSection from '../components/Review/ReviewSection';
import Contact from "../components/Contact/Contact";
import Hero from '../components/Hero/Hero';

const Home = () => {
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData } = data;
  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={heroData.homeOneHero} socialData={socialData} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}

export default Home;
