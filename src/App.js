import React, { Component } from "react";

import "./App.css";
import ListItem from "./components/listItem";
// import ListItem from "./components/listItemFunc";
import ItemA from "./components/hoc/ItemA";
import ItemB from "./components/hoc/ItemB";
import ItemC from "./components/rp/ItemC";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listData: [
        {
          id: 1,
          name: "AOC 27寸ips180Hz限制器",
          price: 2000,
          stock: 20,
        },
        {
          id: 2,
          name: "华硕 4070ti",
          price: 7000,
          stock: 11,
        },
        {
          id: 3,
          name: "瓦尔基里 360水冷",
          price: 2000,
          stock: 0,
        },
      ],
    };
  }

  renderList() {
    return this.state.listData.map((item) => {
      return (
        <ListItem key={item.id} data={item} onDelete={this.handleDelete} />
      );
    });
  }

  handleDelete = (id) => {
    console.log("delete: ", id);
    const listData = this.state.listData.filter((item) => item.id !== id);
    this.setState({ listData });
  };

  render() {
    return (
      <div className="container">
        {!this.state.listData.length && (
          <div className="text-center">购物车是空的</div>
        )}
        {this.renderList()}
        <ItemA id="1"></ItemA>
        <ItemB></ItemB>
        <ItemC></ItemC>
      </div>
    );
  }
}

export default App;
