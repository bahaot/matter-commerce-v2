import React from "react";
import AlertBanner from "./components/AlertBanner/AlerBanner";
import Header from "./components/Header/Header";
import Main from "./UI/Main";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AlertBanner />
      <Header />
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
