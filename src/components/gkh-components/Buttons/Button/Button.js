import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as ivan from 'src/colors';
import { styleHelper } from './styleHelper';
import { onMouseDown, onMouseUp, onMouseOver, onMouseOut } from './eventHandlers';

const Button = ({
  buttonName,
  background: initialBackground,
  boxShadow: initialBoxShadow = 'none',
  textColor: initialTextColor = ivan.fullWhite,
  isDarkness,
  callbackFunction,
  ...args
}) => {
  const [currentBackground, setNewBackground] = useState(initialBackground);
  const [currentBoxShadow, setNewBoxShadow] = useState('none');
  const [currentTextColor, setNewTextColor] = useState(initialTextColor);

  const [shellStyle, textStyle] = styleHelper({
    ...args,
    currentBackground,
    currentBoxShadow,
    currentTextColor,
    isDarkness,
    initialBackground,
    initialTextColor
  });

  const forHandlers = {
    initialBackground,
    initialBoxShadow,
    initialTextColor,
    setNewBackground,
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
  background: PropTypes.string,
  boxShadow: PropTypes.string,
  textColor: PropTypes.string,
  isDarkness: PropTypes.bool,
  callbackFunction: PropTypes.func,
};


export { Button };
