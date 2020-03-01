import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {

  render() {
    const {setOptionValue, currentValue} = this.props;

    return (
      <div>
        <DatePicker
          className={styles.input}
          selected={currentValue}
          onChange={setOptionValue}
        />
      </div>
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;