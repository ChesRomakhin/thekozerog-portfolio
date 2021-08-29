import React from "react";
import Header from "./header";
import styled from "@emotion/styled";
import Box from "./box";

const LogoText = styled.p(
  {
    fontFamily: 'Lato',
    margin: 0,
    fontWeight: 'bold'
  }
);

const Logo = () => (<Box padding={'0.5em'}>
  <Header>Anastasia Romakhina</Header>
  <LogoText>illustrations and art</LogoText>
</Box>)

export default Logo;