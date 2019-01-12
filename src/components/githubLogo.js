import React from 'react';
import githubSVG from 'icons/github-logo.svg';

const GitHubLogo = () =>
  <svg viewBox={githubSVG.viewBox} width='16'>
    <use xlinkHref={`#${githubSVG.id}`} />
  </svg>;


export default GitHubLogo;
