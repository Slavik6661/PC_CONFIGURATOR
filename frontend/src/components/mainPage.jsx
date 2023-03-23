import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PCComponent from "./pcComponent.jsx";
import "../style/menuNavigation.css";
const MainPage = () => {
  return (
    <div className="mainPage">
      <PCComponent />
    </div>
  );
};
export default MainPage;
