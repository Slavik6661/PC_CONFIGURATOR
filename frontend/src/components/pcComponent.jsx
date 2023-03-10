import React from "react";
const pcComponent = () => {
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
    console.log(element.translate);
    return (
      <div id={element.name} className="content">
        <div className="section">
          <p className="nameSection">{element.translate}</p>
        </div>
        <div className="icon-detail">
          <img src={`../icons/iconsSections/${element.name}.png`} />
        </div>
        <button className="btn-addElement"> + Добавить </button>
      </div>
    );
  });
};

export default pcComponent;
