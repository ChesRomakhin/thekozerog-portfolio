import React from "react";
import {ThemeProvider} from "@emotion/react";
import theme from '../theme';
import MainSection from "../components/main-section";
import Gallery from "../components/gallery";
import Logo from "../components/logo";

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <MainSection width={[1, '1200px']}>
        <Logo/>
        <Gallery/>
      </MainSection>
    </div>
  </ThemeProvider>
)
