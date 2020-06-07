/** @format */

import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {
  spring,
  AnimatedRoute,
  AnimatedSwitch,
} from "./components/plugins/react-router-transition";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { HomePage } from "./components/pages/home/HomePage";
import { blue } from "@material-ui/core/colors";
import { HomePageProvider } from "./components/models/HomeContext";
import DetailPage from "./components/pages/detail/DetailPage";
import { DetailProvider } from "./components/models/DetailContext";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
  },
});
class App extends Component {
  render() {
    return (
      <DetailProvider>
        <HomePageProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router>
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route exact path="/" component={HomePage} />
                <Route exact path="/detail/:id" component={DetailPage} />
              </AnimatedSwitch>
            </Router>
          </ThemeProvider>
        </HomePageProvider>
      </DetailProvider>
    );
  }
}

export default App;
