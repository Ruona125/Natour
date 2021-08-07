import React from "react";
import HeaderComponent from "./header.component";
import "../styles/body.styles.scss";
import { MainSection } from "./mainSection.component";

const Body = () => {
  return (
    <div>
      <HeaderComponent />
      <MainSection />
    </div>
  );
};

export default Body;
