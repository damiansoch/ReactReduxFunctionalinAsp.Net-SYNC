import {
  CAKE_ORDERED,
  CAKE_RESTOCKED,
  ICECREAM_ORDERED,
  ICECREAM_RESTOCKED,
} from '../constants/CakeShopConstants';

const initialCakeState = {
  numOfCakes: 10,

  anotherProperty: 0,
};
const initialIceCreamState = {
  numOfIcecreams: 20,
  anotherProperty: 0,
};

export const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

export const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};
