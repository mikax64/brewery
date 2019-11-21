import {
  BUY_INGREDIENTS_FAILURE,
  BUY_INGREDIENTS_SUCCESS,
  CREATE_BEER_REQUEST,
  CREATE_BEER_SUCCESS,
  CREATE_BEER_FAILURE,
  FETCH_CUSTOMERS,
  CUSTOMERS_DRINKING,
  CLOSE_BAR
} from "./../actions/breweryActionsTypes";

const initStateBrewery = {
  barOpen: false,
  beers: 0,
  beersInProgress: false,
  customers: [],
  cereals: 1000,
  water: 1000,
  errorIngredients: "",
  errorMoney: "",
  money: 1000
};

export const breweryReducer = (state = initStateBrewery, action) => {
  switch (action.type) {
    case BUY_INGREDIENTS_SUCCESS:
      return {
        ...state,
        cereals: state.cereals + 200,
        water: state.water + 200,
        money: state.money - 200,
        errorMoney: ""
      };
    case BUY_INGREDIENTS_FAILURE: {
      return {
        ...state,
        errorMoney: action.payload
      };
    }
    case CREATE_BEER_REQUEST:
      return {
        ...state,
        beersInProgress: true
      };
    case CREATE_BEER_SUCCESS:
      return {
        ...state,
        cereals: state.cereals - 100,
        water: state.water - 100,
        beers: state.beers + 10,
        errorIngredients: "",
        beersInProgress: false
      };
    case CREATE_BEER_FAILURE:
      return {
        ...state,
        errorIngredients: action.payload
      };
    case FETCH_CUSTOMERS:
      return {
        ...state,
        barOpen: true,
        customers: action.payload
      };
    case CUSTOMERS_DRINKING:
      return {
        ...state,
        beers: state.beers - 10,
        money: state.money + 200
      };
    case CLOSE_BAR:
      return {
        ...state,
        barOpen: false,
        customers: []
      };

    default:
      return state;
  }
};
