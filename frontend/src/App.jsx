import React, { useEffect } from "react";
import "./style/counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/toolkitSlice";
import { getCpu } from "./api/dataPc";
import PCcomponent from "./components/pcComponent.jsx";
const App = () => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.toolkitS.count);
  console.log(count);
  useEffect(() => {
    getCpu();
  }, []);
  return (
    <>
      <PCcomponent />

      <h1>Counter</h1>
      <button className="inc" onClick={() => dispatch(increment())}>
        +
      </button>
      <input className="out-count" value={count} readOnly></input>
      <button className="dec" onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  );
};
export default App;
