import {
  CAKE_ORDERED,
  CAKE_RESTOCKED,
  ICECREAM_ORDERED,
  ICECREAM_RESTOCKED,
} from '../constants/CakeShopConstants';

export const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1, //quantity
  };
};

export const restockCakes = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

export const orderIcecream = () => {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
};

export const restockIcecream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};
