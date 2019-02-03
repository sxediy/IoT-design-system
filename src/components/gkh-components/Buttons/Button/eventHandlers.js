
import * as ivan from 'src/colors';

const makeHoverBackground = (initialBackground) =>
  (initialBackground === ivan.violet ? ivan.hoverViolet : ivan.hoverGreen);


const makeDownBackground = (isDarkness) =>
  (isDarkness ? ivan.freshAsphalt : ivan.buttonDown);


// нажал
const onMouseDown = ({
  isDarkness,
  borderFromProps,
  initialBoxShadow,
  setNewBackground,
  setNewBorder,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  const downBackground = makeDownBackground(isDarkness);
  setNewBackground(downBackground);
  setNewBorder(borderFromProps);
  setNewBoxShadow(initialBoxShadow);
  setNewTextColor(ivan.fullWhite);
};

// отпустил
const onMouseUp = ({
  initialBackground,
  initialBorder,
  initialTextColor,
  setNewBackground,
  setNewBorder,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  setNewBackground(initialBackground);
  setNewBorder(initialBorder);
  setNewBoxShadow('none');
  setNewTextColor(initialTextColor);
};

// навёл
const onMouseOver = ({
  initialBackground,
  setNewBackground,
  setNewBorder,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  const hoverBackground = makeHoverBackground(initialBackground);
  setNewBackground(hoverBackground);
  setNewBorder('none');
  setNewBoxShadow('none');
  setNewTextColor(ivan.fullWhite);
};

// увёл
const onMouseOut = ({
  initialBackground,
  initialBorder,
  initialTextColor,
  setNewBackground,
  setNewBorder,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  setNewBackground(initialBackground);
  setNewBorder(initialBorder);
  setNewBoxShadow('none');
  setNewTextColor(initialTextColor);
};

export { onMouseDown, onMouseUp, onMouseOver, onMouseOut };
