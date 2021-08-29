import {ThemeProvider} from "@emotion/react";
import theme from "../theme";
import HeaderSection from "../components/header/header-section";
import React from "react";
import MainSection from "../components/main-section";

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <MainSection width={[1, '1200px']}>
      <HeaderSection/>
      <div>Oops. Nothing useful here.</div>
    </MainSection>
  </ThemeProvider>
)

export default NotFoundPage;