import React, { Component } from "react";
import style from "./listItem.module.css";
import classnames from "classnames/bind";
import cn from "classnames"

const cls = classnames.bind(style)

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  manageCount(count) {
    return `${count}个`;
  }

  render() {
    const _cn = cn({
        "list-group-item-dark": !this.props.data.stock
    })
    return (
      <div className="row mb-3">
        <div className="col-6 list-group-item">
          <span className={cls("title", "list-title")}>{this.props.data.name}</span>
        </div>
        <div className="col-1 list-group-item">${this.props.data.price}</div>
        <div
          className={`col-2 list-group-item ${_cn}`}
        >
          {this.manageCount(this.props.data.stock)}
        </div>
      </div>
    );
  }
}

export default ListItem;
