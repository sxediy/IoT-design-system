import titleTemplate from 'templates/titleTemplate';
import ourTemplate from 'templates/ourTemplate';
import codeTemplate from 'templates/codeTemplate';
import propsTemplate from 'templates/propsTemplate';

export default (OurComponent, data) => {
  const {
    title,
    importString,
    description,
    code,
    props
  } = data;

  return {
    Title: (() => titleTemplate(title, importString, description)),
    OurContainer: (() => ourTemplate(OurComponent)),
    Code: (() => codeTemplate(code)),
    Props: (() => propsTemplate(props)),
  };
};
