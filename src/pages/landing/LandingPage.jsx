import { useState } from "react";
import {  HeroSection, FeaturedCourses, WhyChooseUs, HowItWorks, Testimonials, Instructors, Pricing, FAQ, CTA, Footer } from '../../components/index';
import useTheme from '../../hooks/useTheme';

export default function LandingPage() {
  const { theme } = useTheme();
  return (
    <div>
      {/* <Navbar onLoginClick={() => setShowLogin(true)}/> */}
      <HeroSection theme={theme} />
      <FeaturedCourses theme={theme} />
      <WhyChooseUs theme={theme} />
      <HowItWorks theme={theme} />
      <Testimonials theme={theme} />
      <Instructors theme={theme} />
      <Pricing theme={theme} />
      <FAQ theme={theme} />
      <CTA theme={theme} />
      <Footer theme={theme} />

      {/* Show Login/Signup */}
      {/* {showLogin && <LoginSignupCard onClose={() => setShowLogin(false)} />} */}


    </div>
  );
}
