import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ClassSchedulePage from "../components/ClassSchedulePage";
import Header from "../components/Header";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-dark-gray: #a6a6a6;
    --color-light-gray: #e6e6e6;
    --color-blue: #0096FF;
    --color-sky-blue:	#466af0;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}
