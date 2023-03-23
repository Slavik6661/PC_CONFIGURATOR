import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/toolkitSlice";
import { getCpu } from "./api/dataPc";
import PCcomponent from "./components/pcComponent.jsx";
import MenuNavigation from "./components/menuNavigation.jsx";
import "./style/counter.css";
import "./style/menuNavigation.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCpu();
  }, []);
  return (
    <>
      <div className="main-content">
        <div className="menu-navigation">
          <MenuNavigation />
        </div>
        <div>
          <PCcomponent />
        </div>
      </div>
    </>
  );
};
export default App;
