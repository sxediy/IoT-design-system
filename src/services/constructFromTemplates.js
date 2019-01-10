import titleTemplate from 'design-system/templates/titleTemplate';
import gkhTemplate from 'design-system/templates/gkhTemplate';
import codeTemplate from 'design-system/templates/codeTemplate';
import propsTemplate from 'design-system/templates/propsTemplate';

const constructFromTemplates = (GKHComponent, data) => {
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

export default { constructFromTemplates };
