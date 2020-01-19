import styled from "styled-components";
import { typography, color, margin } from "styled-system";
import propTypes from '@styled-system/prop-types';

const Text = styled.p(
    {
        margin: 0,
        lineHeight: 1.5,
    },
    color,
    typography,
    margin
);

Text.propTypes = {
    ...propTypes.color,
    ...propTypes.typography,
    ...propTypes.space,
};

export default Text;