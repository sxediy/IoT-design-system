import React from 'react';
import githubSVG from 'assets/icons/github-logo.svg';

const GitHubLogo = () =>
  <svg viewBox={githubSVG.viewBox} width='16'>
    <use xlinkHref={`#${githubSVG.id}`} />
  </svg>;


export default GitHubLogo;
