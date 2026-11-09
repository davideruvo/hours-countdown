const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

const pad2 = (n) => n.toString().padStart(2, "0");

const formatDay = (date) =>
  `${
    ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"][date.getDay()]
  } ${date.getDate()}/${date.getMonth() + 1}`;

const formatHour = (time) => `${formatDay(time)} ore ${formatTime(time)}`;

const formatTime = (time) =>
  `${pad2(time.getHours())}:${pad2(time.getMinutes())}`;

const formatHHMMSS = (time) =>
  `${pad2(time.getHours())}:${pad2(time.getMinutes())}:${pad2(
    time.getSeconds()
  )}`;

const formatDiff = (diff) => {
  const fragments = [];
  const days = Math.floor(diff / d);
  if (days) fragments.push(`${days} giorn${days === 1 ? "o" : "i"}`);
  const hours = Math.floor((diff % d) / h);
  if (hours) fragments.push(`${hours} or${hours === 1 ? "a" : "e"}`);
  const mins = pad2(Math.floor((diff % h) / m));
  if (mins) fragments.push(`${mins} minut${mins === 1 ? "o" : "i"}`);
  const secs = pad2(Math.floor((diff % m) / s) + 1);
  if (secs) fragments.push(`${secs} second${secs === 1 ? "o" : "i"}`);
  if (fragments.length > 1)
    fragments[fragments.length - 1] = "e " + fragments[fragments.length - 1];
  return fragments.join(" ");
};

export { formatDay, formatHour, formatTime, formatHHMMSS, formatDiff };
