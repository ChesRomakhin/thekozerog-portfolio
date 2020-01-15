import React from 'react';
import Text from '../src/components/text';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';


export default {
  title: 'Text',
  component: Text,
};

export const SimpleText = () => (
  <ThemeProvider theme={theme}>
    <Text color='black'>Test text</Text>
  </ThemeProvider>
);

export const ErrorText = () => (
  <ThemeProvider theme={theme}>
    <Text color="blue">Test text</Text>
  </ThemeProvider>
);
