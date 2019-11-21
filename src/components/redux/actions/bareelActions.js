import {
  CREATE_BEER_SUCCESS,
  CREATE_BEER_REQUEST,
  CREATE_BEER_FAILURE
} from "./breweryActionsTypes";

const createBeersRequest = () => {
  return {
    type: CREATE_BEER_REQUEST
  };
};

const createBeersSuccess = () => {
  return {
    type: CREATE_BEER_SUCCESS
  };
};

const createBeersFailure = error => {
  return {
    type: CREATE_BEER_FAILURE,
    payload: error
  };
};

export const createBeers = () => {
  return (dispatch, getState) => {
    const { cereals, water } = getState();

    if (cereals >= 100 && water >= 100) {
      dispatch(createBeersRequest());
      setTimeout(() => dispatch(createBeersSuccess()), 1000);

      return;
    }
    const error = "No enough ingredients!";
    dispatch(createBeersFailure(error));
  };
};
