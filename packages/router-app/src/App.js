import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar></NavBar>
        <Routes>
          <Route path="/admin" Component={Admin}></Route>
          <Route path="/posts" Component={Posts}></Route>
          <Route path="/product" Component={Product}></Route>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
