import React from "react";
import "./style/counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/toolkitSlice";
const App = () => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.toolkitS.count);
  console.log(count);
  return (
    <>
      <h1>Counter</h1>
      <button className="inc" onClick={() => dispatch(increment())}>
        +
      </button>
      <input className="out-count" value={count}></input>
      <button className="dec" onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  );
};
export default App;
