import React, { PureComponent } from "react";
import style from "./listItem.module.css";
import classnames from "classnames/bind";
import cn from "classnames";

const cls = classnames.bind(style);

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  manageCount(count) {
    return `${count}个`;
  }

  handleDecrease = (e) => {
    if (this.state.count === 0) {
      return;
    }
    const count = this.state.count - 1;
    this.setState({ count });
  };

  handleIncrease = (id) => {
    if (this.state.count === 3) {
      return;
    }
    const count = this.state.count + 1;
    this.setState({ count });
  };

//   shouldComponentUpdate(nextProps) {
//     if (this.props.data.id === nextProps.data.id) {
//       return false;
//     }
//     return true;
//   }

  render() {
    console.log("rendering...");
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
          <span className={cls("digital")}>{this.state.count}</span>
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
          ${this.props.data.price * this.state.count}
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
