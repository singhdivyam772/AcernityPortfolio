import ContactSection from "@/AllComponents/ContactSection";
import { ExpereinceSection } from "@/AllComponents/ExpereinceSection";
import HeroSection from "@/AllComponents/HeroSection";

import SkillSection from "@/AllComponents/SkillSection";
import HeaderAdjustment from "@/common/HeaderAdjustment";
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full">
      <HeaderAdjustment />
      <HeroSection />
      <ExpereinceSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
