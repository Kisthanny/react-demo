import React, { Component } from "react";
import style from "./listItem.module.css";
import classnames from "classnames/bind";
import cn from "classnames";

const cls = classnames.bind(style);

let count = 0;

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  manageCount(count) {
    return `${count}个`;
  }

  countProcessor() {
    if (count < 0) {
      count = 0;
    }
  }

  handleDecrease = (e) => {
    console.log("-");
    count--;
    this.countProcessor();
  };

  handleIncrease = (id) => {
    console.log("+", id);
    count++;
    this.countProcessor();
  };

  render() {
    const _cn = cn({
      "list-group-item-dark": !this.props.data.stock,
    });
    return (
      <div className="row mb-3">
        <div className="col-6 list-group-item">
          <span className={cls("title", "list-title")}>
            {this.props.data.name}
          </span>
        </div>
        <div className="col-1 list-group-item">${this.props.data.price}</div>
        <div className={`col-2 list-group-item ${_cn}`}>
          <button
            onClick={this.handleDecrease}
            type="button"
            className="btn btn-primary"
          >
            {" "}
            -{" "}
          </button>
          <span className={cls("digital")}>{count}</span>
          <button
            onClick={() => this.handleIncrease(this.props.data.id)}
            type="button"
            className="btn btn-primary"
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className="col-1 list-group-item">
          <button
            onClick={() => {
              this.props.onDelete(this.props.data.id);
            }}
            type="button"
            className="btn btn-danger"
          >
            删除
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
