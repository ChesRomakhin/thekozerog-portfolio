import React from "react";
import {ThemeProvider} from "@emotion/react";
import theme from '../theme';
import MainSection from "../components/main-section";
import Gallery from "../components/gallery";
import HeaderSection from "../components/header/header-section";
import FooterSection from "../components/footer-section";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
      <MainSection width={[1, '1200px']}>
        <HeaderSection/>
        <Gallery/>
        <FooterSection/>
      </MainSection>
  </ThemeProvider>
)

export default IndexPage;