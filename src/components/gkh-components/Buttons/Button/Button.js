import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as ivan from 'src/colors';
import styles from './Button.less';
import { styleHelper } from './styleHelper';


const Button = ({
  buttonName,
  background,
  callbackFunction,
  ...args
}) => {
  const [currentBackground, setNewBackground] = useState(background);

  const [shellStyle, textStyle] = styleHelper(args, currentBackground);

  return (
    <div
      style={shellStyle}
      className={styles.buttonWrapper}
      onClick= {callbackFunction}
      onMouseDown={() => setNewBackground(ivan.buttonDown)}
      onMouseUp={() => setNewBackground(background)}
      onMouseOver={() => setNewBackground(ivan.hoverGreen)}
      onMouseOut={() => setNewBackground(background)}
    >
      <span
        style={textStyle}
        className={styles.buttonName}
      >
        {buttonName}
      </span>
    </div>
  );
};


Button.propTypes = {
  buttonName: PropTypes.string,
  background: PropTypes.string,
  callbackFunction: PropTypes.func,
};


export { Button };
