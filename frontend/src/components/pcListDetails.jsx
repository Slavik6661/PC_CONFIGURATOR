import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSelectedDetails, selectedCategory } from "../store/toolkitSlice";
import cpuData from "../../dist/dataPars/cpu.json";
import motherBord from "../../dist/dataPars/motherBord.json";

import {
  getCpu,
  getCpuFan,
  getMb,
  getFrame,
  getGpu,
  getRam,
  getPower,
  getHdd,
  getSsdSata,
  getSsdM2,
} from "../api/dataPc";

let listDetailsObj = {};
let detailsArray = [];
const PCListDetails = (props) => {
  const dispatch = useDispatch();
  const [dataDetails, setDataDetails] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  let selectedCategor = props.categoryDetails;

  let loadDataDetails = {
    cpu: { isLoad: getCpu(), dataLoad: cpuData, isSelected: false },
    motherboard: { isLoad: getMb(), dataLoad: motherBord },
    casePC: { isLoad: getFrame() },
    gpu: { isLoad: getGpu() },
    fan: { isLoad: getCpuFan() },
    ram: { isLoad: getRam() },
    hdd: { isLoad: getHdd() },
    ssd: { isLoad: getSsdSata() },
    ssd_m2: { isLoad: getSsdM2() },
    power: { isLoad: getPower() },
  };
  let listDetails = "";

  // const getHtmlDetails = async (detailsName) => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   };
  //   const res = await fetch(
  //     "https://cors-anywhere.herokuapp.com/https://www.citilink.ru/search/?text=%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80+amd",
  //     config
  //   )
  //     // "https://cors-anywhere.herokuapp.com/https://www.citilink.ru/search/?text=%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80+amd"
  //     .then((res) => {
  //       console.log(res.data);
  //     })

  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const componentOutputTemplate = (selectedCategor, element) => {
    switch (selectedCategor) {
      case "cpu":
        listDetails = [
          element.model +
            " " +
            element.socket +
            " " +
            element.total_number_of_cores +
            " x " +
            element.cpu_base_frequency +
            "ГГц" +
            " " +
            element.number_of_channels +
            "x" +
            element.memory_type +
            " - " +
            element.maximum_RAM_frequency,
        ].join(" ");
        break;
      case "motherboard":
        listDetails = [
          element.model +
            " " +
            element.socket +
            " " +
            element.number_of_memory_slots +
            " x " +
            element.supported_memory_type +
            " " +
            element.chipset +
            " " +
            element.form_factor,
        ].join(" ");
        break;
      case "casePC":
        listDetails = [
          element.manufacturer_company,
          "|",
          element.model,
          "|",
          element.frame_size,
          "L:" + element.length,
          "W:" + element.width,
          "H:" + element.height,
          "|",
          "[",
          element.compatible_board_form_factor,
          "]",
        ].join(" ");
        break;
      case "gpu":
        listDetails = [
          "Видеокарта",
          element.manufacturer_company,
          "|",
          element.model,
          "|",
          element.video_memory_size,
          "Gb",
          element.memory_type,
          "|",
          element.memory_bus_width + "bit",
          "|",
          element.recommended_psu,
        ].join(" ");

        break;
      case "fan":
        listDetails = [
          "Куллер для процессора",
          element.manufacturer_company,
          "|",
          element.model,
          "|",
          "[",
          element.socket,
          "]",
          element.power_dissipation,
        ].join(" ");
        break;
      case "ram":
        listDetails = [
          "Оперативная память",
          element.manufacturer_company,
          "|",
          element.model,
          "|",
          element.memory_type,
          "|",
          element.memory_module_capacity + "Gb",
        ].join(" ");
        break;
      case "hdd":
        listDetails = [
          "Жёсткий диск",
          element.manufacturer_company,
          "|",
          element.model,
          "|",
          element.volume,
          "|",
          element.interface,
        ].join(" ");
        break;
      case "ssd":
        listDetails = [
          "SSD SATA III",
          element.manufacturer_company,
          "|",
          element.model,
          "|",
          element.volume,
          "|",
          element.interface,
        ].join(" ");
        break;
      case "ssd_m2":
        listDetails = [
          "SSD M2",
          element.manufacturer_company,
          "|",
          element.model,
          "|",
          element.volume,
          "|",
          element.interface,
        ].join(" ");
        break;
      case "power":
        listDetails = `${
          (element.manufacturer_company,
          element.model +
            " " +
            element.Power_nominal +
            " " +
            element.Form_Factor)
        }`;
        break;
      default:
        console.log(error);
    }
  };

  const getData = async () => {
    Object.entries(loadDataDetails).forEach(async (element) => {
      console.log(element);
      if (element[0] === selectedCategor) {
        let data = await element[1].isLoad;
        data = data.concat(data, data);
        console.log(data);
        setDataDetails(data);
      }
    });
  };

  const creatingListWithSelectedComponents = (detail, category) => {
    let objKeys = [];
    if (Object.keys(listDetailsObj).length !== 0) {
      Object.keys(listDetailsObj).forEach((element) => {
        objKeys.push(element);
      });

      if (!objKeys.includes(category)) {
        listDetailsObj[category] = [detail];
      } else {
        listDetailsObj[category] = [...listDetailsObj[category], detail];
      }
    } else {
      detailsArray.push(detail);
      listDetailsObj[category] = detailsArray;
    }
  };
  const removeComponentsFromTheList = (targetId, category) => {
    listDetailsObj[category] = listDetailsObj[category].filter((element) => {
      return element.id !== targetId;
    });
  };

  const findComponents = (detailsName, category, targetId) => {
    let dataDetails = loadDataDetails[category].dataLoad;

    if (detailsName) {
      let result = dataDetails.filter((detail, index) => {
        if (detail.name.includes(detailsName)) {
          console.log(detailsName);
          if (Object.keys(dataDetails[index]).includes("id")) {
            creatingListWithSelectedComponents(detail, category);
          } else {
            dataDetails[index]["id"] = targetId;
            creatingListWithSelectedComponents(detail, category);
          }
        }
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (elementModel, event) => {
    const target = event.target;
    const targetId = target.id;
    const category = selectedCategor;
    let detailsName = [" " + elementModel].join(" ");

    if (target.checked) {
      setCheckedItems([...checkedItems, targetId]);
      findComponents(detailsName, category, targetId);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== targetId));
      removeComponentsFromTheList(targetId, category);
    }

    let newListDetailsObj = { ...listDetailsObj };
    console.log(newListDetailsObj);
    dispatch(listSelectedDetails(newListDetailsObj));
    dispatch(selectedCategory(category));
  };

  return (
    <div
      id={`details` + "-" + selectedCategor}
      name={`details` + "-" + selectedCategor}
      className="details"
    >
      <ul className="details-list">
        {dataDetails.map((element, id) => {
          componentOutputTemplate(selectedCategor, element);

          return (
            <li id={id} key={id}>
              <div className="element-details">
                <input
                  className="check-box"
                  type="checkbox"
                  id={selectedCategor + "-" + id}
                  name={selectedCategor + "-" + id}
                  checked={checkedItems.includes(selectedCategor + "-" + id)}
                  onClick={() => handleClick(element.model, event)}
                />

                <label for={selectedCategor + "-" + id}>
                  <span className="element-text">{listDetails}</span>
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PCListDetails;
