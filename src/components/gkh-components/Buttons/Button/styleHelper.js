import * as ivan from 'src/colors';

const makeBorder = (isDarkness, currentBorder) =>
  (isDarkness ? currentBorder : 'none');


const makeDisableBackground = (isDarkness, initialBackground) => {
  if (!isDarkness) return ivan.SPbSky2;
  if (isDarkness && initialBackground === ivan.freshAsphalt) return ivan.freshAsphalt;
  return ivan.SPbSky1;
};


const makeOpacity = (initialBackground, isDarkness, isDisabled) => {
  const shellOpacity = isDarkness && isDisabled && initialBackground === ivan.freshAsphalt ?
    '0.5' : '1';
  const textOpacity = isDarkness && isDisabled ? '0.5' : '1';
  return [shellOpacity, textOpacity];
};


const styleHelper = ({
  size = 'm',
  isDarkness,
  isDisabled = false,
  initialBackground,
  initialTextColor,
  textSize: fontSize = '15px',
  currentBorder,
  currentBackground,
  currentBoxShadow,
  currentTextColor,
}) => {
// eslint-disable-next-line

  const height = {
    s: '32px',
    m: '48px',
    l: '60px',
  }[size];

  const width = {
    s: '200px',
    m: '200px',
    l: '200px',
  }[size];


  const backgroundColor = isDisabled ?
    makeDisableBackground(isDarkness, initialBackground) :
    currentBackground;
  const border = makeBorder(isDarkness, currentBorder);
  const boxShadow = isDisabled ? 'none' : currentBoxShadow;
  const cursor = isDisabled ? 'default' : 'pointer';
  const pointerEvents = isDisabled ? 'none' : 'auto';
  const [shellOpacity, textOpacity] = makeOpacity(initialBackground, isDarkness, isDisabled);

  const shellStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width,
    backgroundColor,
    boxShadow,
    border,
    opacity: shellOpacity,
    borderRadius: '100px',
    padding: '2%',
    cursor,
    pointerEvents,
  };

  const color = isDisabled ? initialTextColor : currentTextColor;

  const textStyle = {
    fontSize,
    color,
    opacity: textOpacity,
    lineHeight: '24px'
  };

  return [shellStyle, textStyle];
};


export { styleHelper };

