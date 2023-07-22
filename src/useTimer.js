import { useState, useRef } from "react";
import { formatTime } from "./formatTime";
const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [splits, setSplits] = useState([]);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    "Your code here";
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    "Your code here";
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    "Your code here";
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
    setSplits([]);
  };
  const splitTimer = () => {
    setSplits((oldSplits) => [...oldSplits, time]);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    splits,
  };
};
export default useTimer;
