
import React, { Fragment } from 'react';
import obj from 'design-system';

const makeUIContainer = key => {
  const {
    Title,
    GKH,
    Code,
    Props
  } = obj[key];


  const title = (() =>
    <Fragment>
      <Title />
    </Fragment>
  )();

  const leftSide = (() =>
    <Fragment>
      <GKH />
      <Code />
    </Fragment>
  )();

  const rightSide = (() =>
    <Fragment>
      <Props />
    </Fragment>
  )();

  return [title, leftSide, rightSide];
};

export default makeUIContainer;
