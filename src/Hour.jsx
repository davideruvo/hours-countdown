import { useState, useEffect } from "react";

const calcCurrentPercent = (m) => {
  const currMin = new Date().getMinutes();
  const currSec = new Date().getSeconds();
  const missing =
    (currMin >= m ? currMin - m : 60 - m + currMin) * 60 + currSec;
  const perc = (missing / (60 * 60)) * 100;
  return (perc < 0.5 ? 0.5 : perc > 99.5 ? 99.5 : perc).toFixed(2);
};
export default function Hour({ n, isPast, m, des }) {
  const [isCurrent, setIsCurrent] = useState(false);
  useEffect(() => {
    const allHours = document.querySelectorAll(".hour");
    const pastHours = document.querySelectorAll(".hour.past");
    setIsCurrent(n === allHours.length - pastHours.length);
  });
  return (
    <div
      title={des}
      className={`hour ${isPast ? "past" : isCurrent ? "current" : ""}`}
      style={{
        backgroundImage: isCurrent
          ? `conic-gradient(#333 ${calcCurrentPercent(m)}%, #888 0%)`
          : "none"
      }}
    >
      {n}
    </div>
  );
}
