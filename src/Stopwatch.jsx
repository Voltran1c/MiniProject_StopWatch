// src/Stopwatch.jsx
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // increment by 10ms
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (time) => {
    const getMilliseconds = `00${time % 1000}`.slice(-3);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(time / 60000);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds} : ${getMilliseconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-300">
      <h1 className="text-4xl font-bold italic mb-4 rounded-lg border-red-800">
        STOP WATCH
      </h1>
      <div className="text-6xl font-mono mb-4">{formatTime(time)}</div>
      <div className="space-x-4">
        <button
          onClick={() => setRunning(true)}
          className="bg-blue-500 text-white font-semibold italic py-2 px-4 rounded hover:bg-blue-700"
        >
          START
        </button>
        <button
          onClick={() => setRunning(false)}
          className="bg-red-500 text-white font-semibold italic py-2 px-4 rounded hover:bg-red-700"
        >
          STOP
        </button>
        <button
          onClick={() => {
            setTime(0);
            setRunning(false);
          }}
          className="bg-yellow-500 text-white font-semibold italic py-2 px-4 rounded hover:bg-yellow-700"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
