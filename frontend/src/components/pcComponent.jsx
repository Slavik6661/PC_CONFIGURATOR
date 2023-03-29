import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scroller } from "react-scroll";
import { selectedCategory } from "../store/toolkitSlice.js";
import PCListDetails from "./pcListDetails.jsx";
import MenuNavigation from "./menuNavigation.jsx";

let pcElements = [
  { name: "cpu", translate: "Процессор", isShow: false },
  { name: "motherboard", translate: "Материнская плата", isShow: false },
  { name: "casePC", translate: "Корпус", isShow: false },
  { name: "gpu", translate: "Видеокарта", isShow: false },
  { name: "fan", translate: "Охлаждение процессора", isShow: false },
  { name: "ram", translate: "Оперативная память", isShow: false },
  { name: "hdd", translate: "Жёсткие диски", isShow: false },
  { name: "ssd", translate: "SSD накопитель", isShow: false },
  { name: "ssd_m2", translate: "SSD накопитель формата M.2", isShow: false },
  { name: "power", translate: "Блок питания", isShow: false },
];
const PCComponent = () => {
  let dispatch = useDispatch();
  let buttonActive = [];
  let [nameCategory, setNameCategory] = useState("");
  let [showDetails, setShowDetails] = useState(false);
  let [expandedDiv, setIdDiv] = useState(pcElements);

  const scrollToContent = (elementScroll) => {
    console.log(elementScroll);
    scroller.scrollTo(elementScroll, {
      duration: 500,
      delay: 500,
      smooth: true,
      offset: -105,
    });
  };
  return (
    <>
      {expandedDiv.map((element, index) => {
        return (
          <div
            id={element.name}
            key={element.name}
            className="content"
            style={{
              height: element.isShow ? 800 : 100,
              transition: "height 0.5s, transform 2s",
              overflow: "hidden",
            }}
          >
            <div id={element.name} name={element.name} className="info-content">
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
                  setShowDetails(!showDetails);
                  element.isShow = !element.isShow;      
                  let elementScroll = "details" + "-" + element.name;
                  setTimeout(() => {
                    scrollToContent(elementScroll);
                  }, 100);
                }}
              >
                {element.isShow ? "- Скрыть" : "+ Добавить"}
              </button>
            </div>

            {element.isShow && <PCListDetails categoryDetails={element.name} />}
          </div>
        );
      })}
    </>
  );
};

export default PCComponent;
