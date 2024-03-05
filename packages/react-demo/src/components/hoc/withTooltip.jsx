import React, { Component } from "react";

const withTooltip = (ChildComponent) => {
  return class HOC extends Component {

    state = {
      showTooltip: false,
      content: "",
    };
    handleOver = (e) => {
      this.setState({
        showTooltip: true,
        content: e.target.innerText,
      });
    };
    handleOut = () => {
      this.setState({
        showTooltip: false,
        content: "",
      });
    };
    render() {
      return (
        <div onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          <ChildComponent action={this.state} {...this.props}/>
        </div>
      );
    }
  };
};

export default withTooltip;
