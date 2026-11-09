import { formatHour, formatDiff } from "./format";

export default function Countdown({ time }) {
  const current = new Date();
  const diff = time - current;
  return (
    <div className="countdown">
      {`${formatDiff(diff)} a `}
      <b>{formatHour(time)}</b>
    </div>
  );
}
