import * as ivan from 'src/colors';

const makeDisableBackground = (isDarkness, initialBackground) => {
  if (!isDarkness) return ivan.SPbSky2;
  if (isDarkness && initialBackground === ivan.freshAsphalt) return ivan.freshAsphalt;
  return ivan.SPbSky1;
};

const styleHelper = ({
  size = 'm',
  border = 'none',
  isDisabled = false,
  textSize: fontSize = '15px',
  currentBackground,
  currentBoxShadow,
  initialTextColor,
  currentTextColor,
  isDarkness,
  initialBackground,
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

  const boxShadow = isDisabled ? 'none' : currentBoxShadow;
  const cursor = isDisabled ? 'default' : 'pointer';

  const shellStyle = {
    height,
    width,
    backgroundColor,
    boxShadow,
    border,
    borderRadius: '100px',
    padding: '2%',
    cursor,
  };

  const opacity = isDisabled && isDarkness ? '0.5' : '1';
  const color = isDisabled ? initialTextColor : currentTextColor;

  const textStyle = {
    fontSize,
    color,
    opacity,
    textAlign: 'center',
    lineHeight: '24px'
  };

  return [shellStyle, textStyle];
};


export { styleHelper };

