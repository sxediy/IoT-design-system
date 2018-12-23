import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards';
import { pricingData } from 'components/gkh-components/PricingTable/data';


const ResourcesTablePage = () =>
  <React.Fragment>
    <ResourcesTable
      pricingData={pricingData}
      changeActiveColumn = {() => {}}
      activeResourceType={'Тепло'}
    />;
  </React.Fragment>;

ResourcesTablePage.propTypes = {
  pricingData: PropTypes.object,
  changeActiveColumn: PropTypes.func,
  activeResourceType: PropTypes.string,
};

// class ResourcesTablePage extends React.Component {
//   static propTypes = {
//     pricingData: PropTypes.object,
//     getPricingData: PropTypes.func,
//   };

// componentDidMount() {
//   this.props.getPricingData(pricingData);
// }

//   render() {
//     return (
//       <ResourcesTable
//         pricingData={pricingData}
//         changeActiveColumn = {() => {}}
//         activeResourceType={'Тепло'}
//       />
//     );
//   }
// }

// const mapStateToProps = ({ pricing }) => (
//   { pricingData: pricing.pricingData }
// );

// const mapDispatchToProps = (dispatch) => (
//   { getPricingData: (data) => dispatch({ type: 'pricingData', payload: { data } }) }
// );

// export default connect(mapStateToProps, mapDispatchToProps)(ResourcesTablePage);

export default ResourcesTablePage;
