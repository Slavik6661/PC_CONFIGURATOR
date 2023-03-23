import React from "react";
import { scroller } from "react-scroll";
import "../style/menuNavigation.css";

const MenuNavigation = (props) => {
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

  const scrollToContent = (elementScroll) => {
    console.log(elementScroll);
    scroller.scrollTo(elementScroll, {
      duration: 500,
      delay: 500,
      smooth: true,
      offset: -10,
    });
  };
  const listDetails = pcElements;
  return listDetails.map((element) => {
    return (
      <ul className="menu-list">
        <li>
          <button
            className="btn-menu"
            onClick={() => {
              let elementScroll = element.name;
              scrollToContent(elementScroll);
            }}
          >
            {element.translate}
          </button>
        </li>
      </ul>
    );
  });
};
export default MenuNavigation;
