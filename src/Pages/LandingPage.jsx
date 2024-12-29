import ContactSection from "@/AllComponents/ContactSection";
import { ExperienceSection } from "@/AllComponents/ExpereinceSection";
import HeroSection from "@/AllComponents/HeroSection";
import ProjectSection from "@/AllComponents/ProjectSection";

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
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
