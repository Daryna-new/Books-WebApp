import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Routes from "./components/Routes";
import createStore from "./store";
import CustomTheme from "./constants/Theme";
import Header from "./components/Header"

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <BrowserRouter basename={"/"}>
          <Header />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
