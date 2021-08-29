import styled from "@emotion/styled";
import space from '@styled-system/space';
import layout from "@styled-system/layout";
import color from "@styled-system/color";
import background from "@styled-system/background";
import flexbox from "@styled-system/flexbox";
import propTypes from '@styled-system/prop-types';

const Box = styled.div(
  {},
  space,
  layout,
  color,
  background,
  flexbox
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.background,
  ...propTypes.flexbox
}

export default Box;
