import axios from "axios";
export async function getCpu() {
  axios
    .get("http://localhost:5000/cpu")
    .then(async (response) => {
      const dataCpu = await response.data;
      console.log(dataCpu);
    })
    .catch((error) => {
      console.log(error);
    });
}
export async function getMb() {
  axios
    .get("http://localhost:5000/mb")
    .then(async (response) => {
      const dataMb = await response.data;
      console.log(dataMb);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getFrame() {
  axios
    .get("http://localhost:5000/frame")
    .then(async (response) => {
      const dataFrame = await response.data;
      console.log(dataFrame);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getGpu() {
  axios
    .get("http://localhost:5000/gpu")
    .then(async (response) => {
      const dataGpu = await response.data;
      console.log(dataGpu);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getRam() {
  axios
    .get("http://localhost:5000/ram")
    .then(async (response) => {
      const dataRam = await response.data;
      console.log(dataGpu);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getPower() {
  axios
    .get("http://localhost:5000/power")
    .then(async (response) => {
      const dataPower = await response.data;
      console.log(dataPower);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getHdd() {
  axios
    .get("http://localhost:5000/hdd")
    .then(async (response) => {
      const dataHdd = await response.data;
      console.log(dataHdd);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getSsdSata() {
  axios
    .get("http://localhost:5000/ssdSata")
    .then(async (response) => {
      const dataSsdSata = await response.data;
      console.log(dataSsdSata);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getSsdM2() {
  axios
    .get("http://localhost:5000/ssdM2")
    .then(async (response) => {
      const dataSsdM2 = await response.data;
      console.log(dataSsdM2);
    })
    .catch((error) => {
      console.log(error);
    });
}
