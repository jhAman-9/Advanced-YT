import React from "react";
import Header from "./components/Header.js";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/appRouter.js";

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
