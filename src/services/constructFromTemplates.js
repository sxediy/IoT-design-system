import Title from 'design-system/templates/titleTemplate';
import Code from 'design-system/templates/codeTemplate';
import Props from 'design-system/templates/propsTemplate';
import GKHContainer from 'design-system/templates/gkhTemplate';

export default (GKHComponent, data) => {
  const {
    title,
    importString,
    description,
    code,
    props
  } = data;

  return {
    Title: (() => Title(title, importString, description)),
    GKHContainer: (() => GKHContainer(GKHComponent)),
    Code: (() => Code(code)),
    Props: (() => Props(props)),
  };
};

