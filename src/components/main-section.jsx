import styled from "@emotion/styled";
import layout from '@styled-system/layout';
import propTypes from '@styled-system/prop-types';

const MainSection = styled.div(
  {
    margin: 'auto',
  },
  layout
);

MainSection.propTypes = {
  ...propTypes.layout,
};

export default MainSection;