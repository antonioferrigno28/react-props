import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="container flex-grow-1">
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
