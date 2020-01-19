import React from 'react';
import styled from "styled-components";
import { typography, color } from "styled-system";
import space from '@styled-system/space';
import propTypes from '@styled-system/prop-types';

const Header = styled.h1(
    {
        fontFamily: 'Lato',
    },
    color,
    typography,
    space
);

Header.propTypes = {
    ...propTypes.color,
    ...propTypes.typography,
    ...propTypes.space,
};

export default Header;
