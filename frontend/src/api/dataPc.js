import axios from "axios";

export async function getCpu() {
  try {
    const response = await axios.get("http://localhost:5000/cpu");
    const dataCpu = await response.data;

    return dataCpu;
  } catch (error) {
    console.log(error);
  }
}

export async function getCpuFan() {
  try {
    const response = await axios.get("http://localhost:5000/fan");
    const CpuFan = await response.data;
    return CpuFan;
  } catch (error) {
    console.log(error);
  }
}

export async function getMb() {
  try {
    const response = await axios.get("http://localhost:5000/mb");
    const dataMb = await response.data;
    return dataMb;
  } catch (error) {
    console.log(error);
  }
}

export async function getFrame() {
  try {
    const response = await axios.get("http://localhost:5000/frame");
    const dataFrame = await response.data;
    return dataFrame;
  } catch (error) {
    console.log(error);
  }
}

export async function getGpu() {
  try {
    const response = await axios.get("http://localhost:5000/gpu");
    const dataGpu = await response.data;
    return dataGpu;
  } catch (error) {
    console.log(error);
  }
}

export async function getRam() {
  try {
    const response = await axios.get("http://localhost:5000/ram");
    const dataRam = await response.data;
    return dataRam;
  } catch (error) {
    console.log(error);
  }
}

export async function getPower() {
  try {
    const response = await axios.get("http://localhost:5000/power");
    const dataPower = await response.data;
    return dataPower;
  } catch (error) {
    console.log(error);
  }
}

export async function getHdd() {
  try {
    const response = await axios.get("http://localhost:5000/hdd");
    const dataHdd = await response.data;
    return dataHdd;
  } catch (error) {
    console.log(error);
  }
}

export async function getSsdSata() {
  try {
    const response = await axios.get("http://localhost:5000/ssdSata");
    const dataSsdSata = await response.data;
    return dataSsdSata;
  } catch (error) {
    console.log(error);
  }
}

export async function getSsdM2() {
  try {
    const response = await axios.get("http://localhost:5000/ssdM2");
    const dataSsdM2 = await response.data;
    return dataSsdM2;
  } catch (error) {
    console.log(error);
  }
}
