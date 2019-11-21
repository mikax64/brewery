import {
  BUY_INGREDIENTS_SUCCESS,
  BUY_INGREDIENTS_FAILURE
} from "./breweryActionsTypes";

const buyIngredientsSuccess = () => {
  return {
    type: BUY_INGREDIENTS_SUCCESS
  };
};

const buyIngredientsFailure = error => {
  return {
    type: BUY_INGREDIENTS_FAILURE,
    payload: error
  };
};

export const buyIngredients = () => {
  return (dispatch, getState) => {
    const { money } = getState();

    if (money >= 200) {
      dispatch(buyIngredientsSuccess());
      return;
    }
    const error = "No enough money!";
    dispatch(buyIngredientsFailure(error));
  };
};
