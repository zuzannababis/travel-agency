import styles from './OrderSummary.scss';
import React from 'react';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import PropTypes from 'prop-types';
import {promoPrice} from '../../../utils/promoPrice';

const OrderSummary = ({cost, options}) => (
  <h2 className={styles.component}>
    Price from:
    <strong> {formatPrice(promoPrice(cost, 20))}
    </strong>
    <div className={styles.price}>Standard price:
      <strong> ${calculateTotal(formatPrice(cost), options)}
      </strong>
    </div>
  </h2>
);

OrderSummary.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
};

export default OrderSummary;