import React from "react";
import {ThemeProvider} from "@emotion/react";
import theme from '../theme';
import HeaderSection from "../components/header/header-section";
import MainSection from "../components/main-section";

const AboutPage = () => (
  <ThemeProvider theme={theme}>
    <MainSection width={[1, '1200px']}>
      <HeaderSection/>
      <div>Hi. My name is</div>
    </MainSection>
  </ThemeProvider>
)

export default AboutPage;