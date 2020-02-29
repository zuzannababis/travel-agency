import styles from './OrderSummary.scss';
import React from 'react';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import PropTypes from 'prop-types';

const OrderSummary = ({cost, options}) => (
  <h2 className={styles.component}>
    Total:
    <strong>
      ${calculateTotal(formatPrice(cost), options)}
    </strong>
  </h2>
);

OrderSummary.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
};

export default OrderSummary;