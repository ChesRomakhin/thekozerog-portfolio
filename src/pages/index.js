import React from "react";
import Header from "../components/header";
import {ThemeProvider} from "styled-components";
import theme from '../theme';

export default () => (
    <ThemeProvider theme={theme}>
        <div>
            <Header>The Kozerog's Portfolio</Header>
            <div>Here will be a lot of pictures</div>
        </div>
    </ThemeProvider>
)
