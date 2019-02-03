
import * as ivan from 'src/colors';

const makeHoverBackground = (initialBackground) => {
  if (initialBackground === ivan.violet) return ivan.hoverViolet;
  return ivan.hoverGreen;
};

const makeDownBackground = (isDarkness) => {
  if (isDarkness) return ivan.freshAsphalt;
  return ivan.buttonDown;
};

// eslint-disable-next-line
const onMouseDown = ({ isDarkness, initialBoxShadow, setNewBackground, setNewBoxShadow, setNewTextColor }) => () => {
  const downBackground = makeDownBackground(isDarkness);
  setNewBackground(downBackground);
  setNewBoxShadow(initialBoxShadow);
  setNewTextColor(ivan.fullWhite);
};

// eslint-disable-next-line
const onMouseUp = ({ initialBackground, setNewBackground, initialTextColor, setNewBoxShadow, setNewTextColor }) => () => {
  setNewBackground(initialBackground);
  setNewBoxShadow('none');
  setNewTextColor(initialTextColor);
};

// eslint-disable-next-line
const onMouseOver = ({initialBackground, setNewBackground, setNewBoxShadow, setNewTextColor }) => () => {
  const hoverBackground = makeHoverBackground(initialBackground);
  setNewBackground(hoverBackground);
  setNewBoxShadow('none');
  setNewTextColor(ivan.fullWhite);
};

// eslint-disable-next-line
const onMouseOut = ({ initialBackground, initialTextColor, setNewBackground, setNewBoxShadow, setNewTextColor }) => () => {
  setNewBackground(initialBackground);
  setNewBoxShadow('none');
  setNewTextColor(initialTextColor);
};

export { onMouseDown, onMouseUp, onMouseOver, onMouseOut };
