import * as ivan from 'src/colors';

const styleHelper = ({
  size = 'm',
  isBordered = false,
  isDisabled = false,
  textSize: fontSize = '15px',
  textColor: color = ivan.fullwhite,
}, currentBackground) => {
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

  const border = isBordered ? '1px solid #FFFFFF' : undefined;
  const backgroundColor = isDisabled ? ivan.SPbSky2 : currentBackground;

  const shellStyle = {
    height,
    width,
    backgroundColor,
    border,
  };

  const textStyle = { fontSize, color };

  return [shellStyle, textStyle];
};


export { styleHelper };

