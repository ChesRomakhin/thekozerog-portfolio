import React from "react";
import Header from "../components/header";
import {ThemeProvider} from "@emotion/react";
import theme from '../theme';

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header>Anastasia Romakhina</Header>
      <div>Hi. My name is</div>
    </div>
  </ThemeProvider>
)
