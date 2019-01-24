import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { RowTimeFilter } from 'components/gkh-components/RowTimeFilter/RowTimeFilter';


class RowTimeFilterWrapper extends PureComponent {
    state = {
      dateFrom: this.props.initialDateFrom,
      dateTo: this.props.initialDateTo,
    }

    setDate = (dateFrom, dateTo) => () => {
      this.setState({ dateFrom, dateTo });
    }

    onChange = (momentz) => {
      if (!momentz || momentz.length === 0) {
        return;
      }
      this.setDate(...momentz)();
    }

    render() {
      return (
        <RowTimeFilter
          dateFrom={ this.state.dateFrom }
          dateTo={ this.state.dateTo }
          setDate={ this.setDate }
          onChange={ this.onChange }
          isTSRV= { this.props.isTSRV }
        />
      );
    }
}

RowTimeFilterWrapper.propTypes = {
  initialDateFrom: PropTypes.object,
  initialDateTo: PropTypes.object,
  isTSRV: PropTypes.bool,
};

export { RowTimeFilterWrapper };
