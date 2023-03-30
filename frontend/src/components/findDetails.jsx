import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListFindDetails from "./listFindDetails.jsx";
import { scroller } from "react-scroll";
import "../style/findDetails.css";
const FindDetail = () => {
  let pcElements = [
    { name: "cpu", translate: "Процессор", findDetail: 0, isShow: false },
    {
      name: "motherboard",
      translate: "Материнская плата",
      findDetail: 0,
      isShow: false,
    },
    { name: "casePC", translate: "Корпус", isShow: false },
    { name: "gpu", translate: "Видеокарта", isShow: false },
    { name: "fan", translate: "Охлаждение процессора", isShow: false },
    { name: "ram", translate: "Оперативная память", isShow: false },
    { name: "hdd", translate: "Жёсткие диски", isShow: false },
    { name: "ssd", translate: "SSD накопитель", isShow: false },
    { name: "ssd_m2", translate: "SSD накопитель формата M.2", isShow: false },
    { name: "power", translate: "Блок питания", isShow: false },
  ];

  let [showDetails, setShowDetails] = useState(false);
  let [expandedDiv, setIdDiv] = useState(pcElements);

  let selectDetails = useSelector(
    (state) => state.toolkitS.listSelectedDetails
  );

  let selectedCategory = useSelector(
    (state) => state.toolkitS.selectedCategory
  );

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
    <div className="result-search">
      {expandedDiv.map((element, id) => {
        if (element.name === selectedCategory) {
          element.findDetail = selectDetails[selectedCategory]?.length;
        }

        return (
          <div
            id={element.name}
            key={element.name}
            className="find-content"
            style={{
              height: element.isShow ? 800 : 100,
              transition: "height 0.5s, transform 2s",
              overflow: "hidden",
            }}
          >
            <div id={element.name} name={element.name} className="info-content">
              <div className="find-section">
                <p className="nameSection">{element.translate}</p>
              </div>
              <div className="find-icon-detail">
                <img src={`../icons/iconsSections/${element.name}.png`} />
              </div>

              <div className="info-offers">
                {selectDetails !== "undefined" && element.findDetail > 0 ? (
                  <p style={{ textAlign: "justify", marginTop: "30px" }}>
                    нашлось {element.findDetail} предложений в магазине
                  </p>
                ) : (
                  <p style={{ textAlign: "justify", marginTop: "30px" }}>
                    {"здесь пока ничего нет"}
                  </p>
                )}
              </div>

              <button
                id={element.name}
                className="find-btn-addElement"
                onClick={() => {
                  setShowDetails(!showDetails);
                  element.isShow = !element.isShow;
                  let elementScroll = "details" + "-" + element.name;
                  setTimeout(() => {
                    scrollToContent(elementScroll);
                  }, 100);
                }}
              >
                {element.isShow ? "- Скрыть" : "Смотреть"}
              </button>
            </div>

            {element.isShow && (
              <ListFindDetails
                selectDetails={selectDetails}
                selectedCategory={selectedCategory}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FindDetail;
