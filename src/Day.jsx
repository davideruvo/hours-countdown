import Hour from "./Hour";
import { formatDay, formatHour } from "./format";

const calcTime = (d, h, m) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m);

export default function Day({ n, d, h, m }) {
  return (
    <div className="day" title={formatDay(d)}>
      {Object.keys(h).map((line, iL) => (
        <div className="line" key={iL}>
          {h[line].map((x, i) => (
            <Hour
              key={i}
              des={formatHour(calcTime(d, x, m))}
              n={
                (n - 1) * 8 + h[line].length * (Object.keys(h).length - iL) - i
              }
              isPast={calcTime(d, x, m) < new Date()}
              m={m}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
