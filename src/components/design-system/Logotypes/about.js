// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'Logotypes and Icons';

export const importString = `
  import * as logotypes from 'components/gkh-components/Logo/Logo';
`;


export const description = `
  Набор логотипов и иконок.
`;

export const code = `
  <div className={layout.container}>
    {
      Object.keys(logotypes).map(name =>
        <div key={name} className={layout.item}>{logotypes[name]()}</div>
      )
    }
  </div>;
`;

export const props = {
};

