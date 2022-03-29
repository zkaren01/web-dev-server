import './App.css';
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Index from "./components/labs";
import Tuiter from "./components/tuiter/index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Labs from "./components/labs";
import ExploreScreen from "./components/tuiter/explore/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route path="labs" element={<Labs/>}/>
              <Route path="hello" element={<HelloWorld/>}/>
              <Route path="tuiter" element={<Tuiter/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="explore" element={<ExploreScreen/>}/>
                {/*<Route path="notifications" element={<NotificationScreen/>}/>*/}
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
