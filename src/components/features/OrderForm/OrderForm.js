import styles from './OrderForm.scss';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import settings from '../../../data/settings.js';
import Button from '../../common/Button/Button.js';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';

const validate = (options, tripCost, tripId, tripName, countryCode) => {
  const { name, contact } = options;
  if (name == '') {
    alert('Insert your name');
  } else if (contact == '') {
    alert('Insert your contact info');
  } else {
    sendOrder(options, tripCost, tripId, tripName, countryCode);
  }
};

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({options, tripCost, setOrderOption, tripId, tripName, countryCode}) => (
  <Row className={styles.component}>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
      <Button onClick={() => validate(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.any,
};

export default OrderForm;