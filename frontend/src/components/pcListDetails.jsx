import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
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
const PCListDetails = (props) => {
  let selectedCategor = props.categoryDetails;
  let loadDataDetails = {
    cpu: { isLoad: getCpu(), isSelected: false },
    motherboard: { isLoad: getMb() },
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
  const getHtmlDetails = async (detailsName) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.citilink.ru/search/?text=%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80+amd",
      config
    )
      // "https://cors-anywhere.herokuapp.com/https://www.citilink.ru/search/?text=%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80+amd"
      .then((res) => {
        console.log(res.data);
      })

      .catch((error) => {
        console.error(error);
      });
  };
  const componentOutputTemplate = (selectedCategor, element) => {
    switch (selectedCategor) {
      case "cpu":
        listDetails = `${
          (element.manufacturer_company,
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
            element.maximum_RAM_frequency)
        }`;
        break;
      case "motherboard":
        listDetails = `${
          element.manufacturer_company +
          " " +
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
          element.form_factor
        }`;
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
  const [dataDetails, setDataDetails] = useState([]);
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
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      id={`details` + "-" + selectedCategor}
      name={`details` + "-" + selectedCategor}
      className="details"
    >
      <ul className="details-list">
        {dataDetails.map((element) => {
          componentOutputTemplate(selectedCategor, element);

          return (
            <li key={element.id}>
              <div
                className="element-details"
                onClick={() => {
                  getHtmlDetails();
                  console.log(element.manufacturer_company, element.model);
                }}
              >
                <input
                  className="check-box"
                  type="checkbox"
                  id={"scales" + element.model}
                  name={"scales" + element.model}
                />

                <label for={"scales" + element.model}>
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
