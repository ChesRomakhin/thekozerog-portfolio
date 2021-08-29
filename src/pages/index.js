import React from "react";
import Header from "../components/header";
import {ThemeProvider} from "@emotion/react";
import theme from '../theme';
import MainSection from "../components/main-section";

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <MainSection>
        <Header>Anastasia Romakhina</Header>
        <div>Here will be a lot of pictures</div>
      </MainSection>
    </div>
  </ThemeProvider>
)
