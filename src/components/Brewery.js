import React, { Component } from "react";
import { connect } from "react-redux";
import { buyIngredients } from "./redux";
import Bareel from "./Bareel";
import Bar from "./Bar";

export class Brewery extends Component {
  render() {
    const { beers, cereals, water, buyIngredients, error, money } = this.props;
    return (
      <div className="brewery">
        <h2>Brewery</h2>
        <p>{money} $</p>
        <p>beers : {beers}</p>
        <p>cereals : {cereals}kg</p>
        <p>water : {water}L</p>
        <button onClick={buyIngredients}>Buy ingredients</button>
        <p>{error}</p>
        <Bareel />
        <Bar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    cereals: state.cereals,
    water: state.water,
    error: state.errorMoney,
    money: state.money
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIngredients: () => dispatch(buyIngredients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
