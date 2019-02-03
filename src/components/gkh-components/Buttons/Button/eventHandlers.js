
import * as ivan from 'src/colors';

const makeHoverBackground = (initialBackground) => {
  if (initialBackground === ivan.violet) return ivan.hoverViolet;
  return ivan.hoverGreen;
};

const makeDownBackground = (isDarkness) => {
  if (isDarkness) return ivan.freshAsphalt;
  return ivan.buttonDown;
};


const onMouseDown = ({
  isDarkness,
  setNewBackground,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  const downBackground = makeDownBackground(isDarkness);
  setNewBackground(downBackground);
  setNewBoxShadow('none');
  setNewTextColor(ivan.fullWhite);
};

// eslint-disable-next-line
const onMouseUp = ({ initialBackground, setNewBackground, initialTextColor, setNewTextColor, setNewBoxShadow }) => () => {
  setNewBackground(initialBackground);
  setNewTextColor(initialTextColor);
  setNewBoxShadow('none');
};

const onMouseOver = ({
  initialBackground,
  setNewBackground,
  initialBoxShadow,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  const hoverBackground = makeHoverBackground(initialBackground);
  setNewBackground(hoverBackground);
  setNewBoxShadow(initialBoxShadow);
  setNewTextColor(ivan.fullWhite);
};

const onMouseOut = ({
  initialBackground,
  setNewBackground,
  setNewBoxShadow,
  initialTextColor,
  setNewTextColor
}) => () => {
  setNewBackground(initialBackground);
  setNewBoxShadow('none');
  setNewTextColor(initialTextColor);
};

export { onMouseDown, onMouseUp, onMouseOver, onMouseOut };
