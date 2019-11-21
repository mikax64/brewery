import React, { Component } from "react";
import { connect } from "react-redux";
import { createBeers } from "./redux";

class Bareel extends Component {
  render() {
    const { cereals, water, error, createBeers, beersInProgress } = this.props;

    return (
      <div className="bareel">
        <h2>Bareel</h2>
        Stock : cereals : {cereals}kg | water{water}L
        <button onClick={createBeers} disabled={beersInProgress}>
          Create some beers
        </button>
        {beersInProgress && <p>Beers in progress....</p>}
        <p>{error}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cereals: state.cereals,
    water: state.water,
    error: state.errorIngredients,
    beersInProgress: state.beersInProgress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBeers: () => dispatch(createBeers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bareel);
