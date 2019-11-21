import React, { Component } from "react";
import { connect } from "react-redux";
import { openBar } from "./redux";

export class Bar extends Component {
  shouldComponentUpdate() {
    console.log("B : shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    const { beers, customers, openBar } = this.props;
    if (beers >= 30 && !customers.length) {
      openBar();
    }
  }
  render() {
    const { beers, customers, barOpen } = this.props;
    return (
      <div>
        <h2>Bar</h2>
        <h3>{barOpen ? "Open" : "Close"}</h3>
        <h3>Beers : {beers}</h3>
        {customers.map(customer => {
          return <p key={customer.id}>{customer.name}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    barOpen: state.barOpen,
    customers: state.customers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openBar: () => dispatch(openBar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bar);
