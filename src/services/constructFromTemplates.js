import titleTemplate from 'templates/titleTemplate';
import gkhTemplate from 'templates/gkhTemplate';
import codeTemplate from 'templates/codeTemplate';
import propsTemplate from 'templates/propsTemplate';

export default (GKHComponent, data) => {
  const {
    title,
    importString,
    description,
    code,
    props
  } = data;

  return {
    Title: (() => titleTemplate(title, importString, description)),
    GKHContainer: (() => gkhTemplate(GKHComponent)),
    Code: (() => codeTemplate(code)),
    Props: (() => propsTemplate(props)),
  };
};
