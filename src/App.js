import React, { Component } from "react";

import "./App.css";
import ListItem from "./components/listItem";
// import ListItem from "./components/listItemFunc";

const listData = [
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
];

class App extends Component {
  renderList() {
    return listData.map((item) => {
      return <ListItem key={item.id} data={item} />;
    });
  }

  render() {
    return (
      <div className="container">
        {!listData.length && <div classNAme="text-center">购物车是空的</div>}
        {this.renderList()}
      </div>
    );
  }
}

export default App;
