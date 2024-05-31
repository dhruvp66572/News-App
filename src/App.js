import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { Route, Routes } from "react-router-dom";

<<<<<<< HEAD
const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 9;
  const apikey = "5397f9f778f24499a16bd665bd513554";
  console.log(apikey)
  return (
    <>
      <div>
        <NavBar />
        <LoadingBar color="#f11946" progress={setProgress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"general"}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"business"}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"entertainment"}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"general"}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"health"}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"science"}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"sports"}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key={"technology"}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
=======
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" >
                <News key={"general"} pageSize={6} country="in" category="general"/>
              </Route>
              <Route exact path="/business" >
                <News key={"business"} pageSize={6} country="in" category="business"  />
              </Route>
              <Route exact path="/entertainment" >
                <News key={"entertainment"} pageSize={6} country="in" category="entertainment"  />              
              </Route>
              <Route exact path="/general" >
                <News key={"general"} pageSize={6} country="in" category="general"/>
              </Route>
              <Route exact path="/health" >
                <News key={"health"} pageSize={6} country="in" category="health"  />
              </Route>
              <Route exact path="/science" >
                <News key={"science"} pageSize={6} country="in" category="science" />
              </Route>
              <Route exact path="/sports" >
                <News key={"sports"} pageSize={6} country="in" category="sports"  />
              </Route>
              <Route exact path="/technology" >
                <News key={"technology"} pageSize={6} country="in" category="technology" />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
>>>>>>> parent of 1ba7dcb (Simple App Uses Next And Previous Btn)
