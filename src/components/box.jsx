import React from "react";
import styled from "@emotion/styled";
import space from '@styled-system/space';
import layout from "@styled-system/layout";
import propTypes from '@styled-system/prop-types';

const Box = styled.div(
  {},
  space,
  layout
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
}

export default Box;
