import React from "react";
import {Link} from "gatsby";
import styled from "@emotion/styled";
import typography from "@styled-system/typography";
import propTypes from "@styled-system/prop-types";

const StyledText = styled.p(
  {
    marginLeft: '1em',
    "& a:visited": {
      color: "black"
    },
    "& a:hover": {
      color: "rgba(0,0,0,0.75)"
    }
  },
  typography,
)

StyledText.propTypes = {
  ...propTypes.typography,
}

const NavLink = ({children, toPage}) => (<StyledText fontFamily={'header'} fontWeight={'bold'} fontSize={'1.5em'}>
    <Link to={toPage}>
      {children}
    </Link>
  </StyledText>
);

export default NavLink;