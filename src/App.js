import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
  Switch
} from "react-router-dom/cjs/react-router-dom.min";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route  key="general" path="/" >
                <News pageSize={6} country={"in"} category="general" key="general" />
              </Route>
              <Route exact path="/business" >
                <News pageSize={6} country={"in"} category="business" key="business" />
              </Route>
              <Route exact path="/entertainment" >
                <News pageSize={6} country={"in"} category="entertainment" key="entertainment" />
              </Route>
              <Route exact path="/general" >
                <News pageSize={6} country={"in"} category="general" key="general" />
              </Route>
              <Route exact path="/health" >
                <News pageSize={6} country={"in"} category="health" key="health" />
              </Route>
              <Route exact path="/science" >
                <News pageSize={6} country={"in"} category="science" key="science" />
              </Route>
              <Route exact path="/sports" >
                <News pageSize={6} country={"in"} category="sports" key="sports" />
              </Route>
              <Route exact path="/technology" >
                <News pageSize={6} country={"in"} category="technology" key="technology" />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
