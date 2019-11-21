import {
  FETCH_CUSTOMERS,
  CLOSE_BAR,
  CUSTOMERS_DRINKING
} from "./breweryActionsTypes";
import axios from "axios";

export const openBar = () => {
  return (dispatch, getState) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const customers = response.data;
      dispatch(fetchCustomers(customers));
      const timer = setInterval(() => {
        dispatch(customersDrinking(timer));
      }, 2000);
    });
  };
};

const customersDrinking = timer => {
  return (dispatch, getState) => {
    if (getState().beers === 10) {
      clearInterval(timer);
      dispatch({ type: CUSTOMERS_DRINKING });
      dispatch(closeBar());
    } else {
      dispatch({ type: CUSTOMERS_DRINKING });
    }
  };
};
const fetchCustomers = customers => {
  return {
    type: FETCH_CUSTOMERS,
    payload: customers
  };
};
export const closeBar = () => {
  return {
    type: CLOSE_BAR
  };
};
