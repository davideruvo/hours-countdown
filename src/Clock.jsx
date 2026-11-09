import { formatHHMMSS } from "./format";

export default function Clock() {
  return <div className="clock">{`${formatHHMMSS(new Date())}`}</div>;
}
