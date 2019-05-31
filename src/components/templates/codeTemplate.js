import React from 'react';
import codeStyle from 'templates/codeStyle.less';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/styles/hljs';

// import { dark } from 'react-syntax-highlighter/dist/styles/prism';
// список цветовых тем https://github.com/conorhastings/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_HLJS.MD

const codeTemplate = (code) => (
  <div className={codeStyle.container}>
    <SyntaxHighlighter
      language='javascript'
      style={githubGist}
      customStyle={{ background: '#fafafa' }}
    >
      {code}
    </SyntaxHighlighter>
  </div >
);

export default codeTemplate;
