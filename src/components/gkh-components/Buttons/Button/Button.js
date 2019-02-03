import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as ivan from 'src/colors';
import { styleHelper } from './styleHelper';
import { onMouseDown, onMouseUp, onMouseOver, onMouseOut } from './eventHandlers';

const Button = ({
  buttonName,
  // border: initialBorder = `1px solid ${ivan.fullWhite}`,
  border: borderFromProps = `1px solid ${ivan.fullWhite}`,
  background: initialBackground,
  boxShadow: initialBoxShadow = 'none',
  textColor: initialTextColor = ivan.fullWhite,
  isDarkness,
  callbackFunction,
  ...remainProps
}) => {
  const initialBorder = initialBackground === ivan.freshAsphalt ? borderFromProps : 'none';
  const [currentBorder, setNewBorder] = useState(initialBorder);
  const [currentBackground, setNewBackground] = useState(initialBackground);
  const [currentBoxShadow, setNewBoxShadow] = useState('none');
  const [currentTextColor, setNewTextColor] = useState(initialTextColor);

  const [shellStyle, textStyle] = styleHelper({
    initialBackground,
    initialTextColor,
    isDarkness,
    currentBorder,
    currentBackground,
    currentBoxShadow,
    currentTextColor,
    ...remainProps,
  });

  const forHandlers = {
    initialBackground,
    borderFromProps,
    initialBorder,
    initialBoxShadow,
    initialTextColor,
    setNewBackground,
    setNewBorder,
    setNewBoxShadow,
    setNewTextColor,
    isDarkness,
  };

  return (
    <div
      style={shellStyle}
      onClick= {callbackFunction}
      onMouseDown={onMouseDown(forHandlers)}
      onMouseUp={onMouseUp(forHandlers)}
      onMouseOver={onMouseOver(forHandlers)}
      onMouseOut={onMouseOut(forHandlers)}
    >
      <span
        style={textStyle}
      >
        {buttonName}
      </span>
    </div>
  );
};


Button.propTypes = {
  buttonName: PropTypes.string,
  border: PropTypes.string,
  background: PropTypes.string,
  boxShadow: PropTypes.string,
  textColor: PropTypes.string,
  isDarkness: PropTypes.bool,
  callbackFunction: PropTypes.func,
};


export { Button };
