import "./styles.css";
import Clock from "./Clock";
import Countdown from "./Countdown";
import Day from "./Day";
import { useEffect, useState } from "react";

export default function App({ data }) {
  const [tick, setTick] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prevTick) => !prevTick);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const end = new Date(
    data.d.at(-1).getFullYear(),
    data.d.at(-1).getMonth(),
    data.d.at(-1).getDate(),
    data.h.last.at(-1),
    data.m
  );

  return (
    <div className="App">
      <div className="top">
        <Clock />
        <Countdown time={end} />
      </div>
      <div className="main">
        {data.d.map((x, i) => (
          <Day key={i} n={data.d.length - i} d={x} h={data.h} m={data.m} />
        ))}
      </div>
    </div>
  );
}
