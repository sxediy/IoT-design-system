
import React from 'react';
import obj from 'design-system';

const makeUIContainer = key => {
  const {
    Title,
    GKH,
    Code,
    Props
  } = obj[key];

  const leftSide = (() =>
    <div>
      <Title />
      <GKH />
      <Code />
    </div>
  )();

  const rightSide = (() =>
    <div>
      <Props />
    </div>
  )();

  return [leftSide, rightSide];
};

export default makeUIContainer;
