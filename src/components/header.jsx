import styled from "@emotion/styled";
import {typography, color} from "styled-system";
import space from '@styled-system/space';
import variant from "@styled-system/variant";
import propTypes from '@styled-system/prop-types';

const Header = styled.h1(
  {
    fontFamily: 'Lato',
  },
  color,
  typography,
  space,
  variant({
    scale: "headers"
  })
);

Header.propTypes = {
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.space,
};

export default Header;
