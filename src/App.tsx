import React from "react";
import { Route, Routes } from "react-router-dom";

import { Main } from "./pages/Main";
import { CountryInfo } from "./pages/CountryInfo";
import { ErrorPage } from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/country/:name" element={<CountryInfo />} />
      {/*<Route path="/error" element={<ErrorPage  />} />*/}
    </Routes>
  );
}

export default App;
