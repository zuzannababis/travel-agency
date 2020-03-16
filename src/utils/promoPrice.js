import {parseOptionPrice} from './parseOptionPrice';

export const promoPrice = (standardPrice, discount) => {
  let price = parseOptionPrice(standardPrice).value;

  return `$${(price - (price * (discount/100))).toFixed(2)}`;
};