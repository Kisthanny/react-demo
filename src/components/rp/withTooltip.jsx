import React, { Component } from "react";

class WithTooltip extends Component {
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
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default WithTooltip;
