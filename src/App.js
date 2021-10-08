import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";
import { Switch, Router, Route } from "react-router-dom";

import stores from "./stores/index";
import routing from "./stores/routing";

import Menu from "./components/menu";

import Shop from "./pages/shop";
import Cart from "./pages/cart";

import "./App.css";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routing);

function App() {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <div className="wrapper">
          <Menu />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Shop />;
              }}
            />

            <Route
              exact
              path="/shop"
              render={() => {
                return <Shop />;
              }}
            />

            <Route
              exact
              path="/cart"
              render={() => {
                return <Cart />;
              }}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
