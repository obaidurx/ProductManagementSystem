import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import UpdateProduct from "./component/UpdateProduct/UpdateProduct";
import Products from "./component/Products/Products";
import AddProduct from "./component/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route path="/products/add">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/products/update/:id">
              <UpdateProduct></UpdateProduct>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
