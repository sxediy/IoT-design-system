import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';
import { fullWhite, fury, freshAsphalt, green, violet } from 'src/colors';

import { Button } from 'components/gkh-components/Buttons/Button/Button';
import {
  // buttonName,
  // size,
  // isDarkness,
  // isDisabled,
  // background,
  // boxShadow,
  // border,
  // textColor,
  // textSize,
  callbackFunction,
} from 'components/gkh-components/Buttons/Button/fakeData';

import * as data from './about';


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '600px',
};

const angelContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: fullWhite,
  padding: '2%'
};

const darkContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: freshAsphalt,
  padding: '2%'
};

const pairContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '2%',
};


const OurComponent = () =>
  <div style={containerStyle}>
    <div style={angelContainerStyle}>
      <div style={pairContainer}>
        <Button
          buttonName={ '1' }
          size={ 'l' }
          border = {`1px dotted ${fury}`}
          background = { green }
          callbackFunction= { callbackFunction }
        />
        <Button
          buttonName={ '2' }
          size={ 'l' }
          border = {`1px dotted ${fury}`}
          background = { green }
          isDisabled={ true }
          callbackFunction= { callbackFunction }
        />
      </div>
      <div style={pairContainer}>
        <Button
          buttonName={ '3' }
          size={ 's' }
          border = {`1px dotted ${fury}`}
          background = { violet }
          isDisabled={ true }
          callbackFunction= { callbackFunction }
        />
        <Button
          buttonName={ '4' }
          size={ 's' }
          border = {`1px dotted ${fury}`}
          background = { violet }
          callbackFunction= { callbackFunction }
        />
      </div>
    </div>
    <div style={darkContainerStyle}>
      <div style={pairContainer}>
        <Button
          buttonName={ '5' }
          isDarkness= { true }
          background = { freshAsphalt }
          textColor = { fullWhite }
          callbackFunction= { callbackFunction }
        />
        <Button
          buttonName={ '6' }
          isDarkness= { true }
          isDisabled={ true }
          background = { freshAsphalt }
          textColor = { fullWhite }
          callbackFunction= { callbackFunction }
        />
      </div>
      <div style={pairContainer}>
        <Button
          buttonName={ '7' }
          isDarkness= { true }
          border = {`1px dotted ${fury}`}
          background = { fullWhite }
          textColor = { freshAsphalt }
          callbackFunction= { callbackFunction }
        />
        <Button
          buttonName={ '8' }
          isDarkness= { true }
          isDisabled={ true }
          border = {`1px dotted ${fury}`}
          background = { fullWhite }
          textColor = { freshAsphalt }
          callbackFunction= { callbackFunction }
        />
      </div>
    </div>
    {/* <Button
      buttonName={ buttonName }
      size={ size }
      isDarkness= { isDarkness }
      isDisabled={ isDisabled }
      background = { background }
      boxShadow= { boxShadow }
      border={ border }
      textColor = { textColor }
      textSize = { textSize }
      callbackFunction= { callbackFunction }
    /> */}
  </div>;


export default constructFromTemplates(OurComponent, data);
