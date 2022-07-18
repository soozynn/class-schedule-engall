import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddClassSchedule from "../components/AddClassSchedule/index";
import ClassSchedule from "../components/ClassSchedule/index";
import Header from "../components/Header/index";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    font-family: "Acme", sans-serif;
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
    --size-xsmall: 15px;
    --size-small: 20px;
    --size-medium: 25px;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ClassSchedule />} />
          <Route path="/schedule" element={<AddClassSchedule />} />
        </Routes>
      </Router>
    </>
  );
}
