import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PCListDetails from "./pcListDetails.jsx";

// {showDetails && (
//   <li>
//     <PCListDetails />
//   </li>
// )}
const pcComponent = () => {
  let [showDetails, setShowDetails] = useState(false);
  let pcElements = [
    { name: "cpu", translate: "Процессор" },
    { name: "motherboard", translate: "Материнская плата" },
    { name: "case", translate: "Корпус" },
    { name: "gpu", translate: "Видеокарта" },
    { name: "fan", translate: "Охлаждение процессора" },
    { name: "ram", translate: "Оперативная память" },
    { name: "hdd", translate: "Хранение данных" },
    { name: "power", translate: "Блок питания" },
  ];
  return pcElements.map((element, index) => {
    return (
      <div id={element.name} className="content">
        <div className="section">
          <p className="nameSection">{element.translate}</p>
        </div>
        <div className="icon-detail">
          <img src={`../icons/iconsSections/${element.name}.png`} />
        </div>
        <button
          id={element.name}
          className="btn-addElement"
          onClick={() => {
            // setShowDetails(!showDetails);
            //console.log(showDetails);
          }}
        >
          + Добавить
        </button>
      </div>
    );
  });
};

export default pcComponent;
