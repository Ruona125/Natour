import React from "react";
import HeaderComponent from "./header.component";
import "../styles/body.styles.scss";
import { MainSection } from "./mainSection.component";
import { SectionFeatures } from "./sectionFeatures.component";
const Body = () => {
  return (
    <div>
      <HeaderComponent />
      <MainSection />
      <SectionFeatures />
    </div>
  );
};

export default Body;
