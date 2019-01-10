import React from 'react';
import codeStyle from 'design-system/templates/codeStyle.less';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';

const codeTemplate = (code) =>
  <div className={codeStyle.container}>
    <SyntaxHighlighter language='javascript' style={docco}>{code}</SyntaxHighlighter>
  </div >;

export default codeTemplate;

