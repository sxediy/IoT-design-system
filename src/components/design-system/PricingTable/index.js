import Title from 'design-system/templates/titleTemplate';
import Code from 'design-system/templates/codeTemplate';
import Props from 'design-system/templates/propsTemplate';
import GKHContainer from 'design-system/templates/gkhTemplate';
import { title, importString, description, code, props } from './data';
import GKHComponent from './GKHComponent';

const pricingTable = {
  Title: (() => Title(title, importString, description)),
  GKHContainer: (() => GKHContainer(GKHComponent)),
  Code: (() => Code(code)),
  Props: (() => Props(props)),
};

export default pricingTable;
