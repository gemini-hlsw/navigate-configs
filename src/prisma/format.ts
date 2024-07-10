export function deg2hms(deg: number): string {
  if (deg < 0) deg = deg + 360;
  let total_hours = (deg / 360) * 24;
  let hours = Math.trunc(total_hours);
  total_hours = (total_hours - hours) * 60;
  let mins = Math.trunc(total_hours);
  let secs = (total_hours - mins) * 60;
  if (secs.toFixed(2) === '60.00') {
    mins = mins + 1;
    secs = 0;
  }
  if (mins === 60) {
    hours = hours + 1;
    mins = 0;
  }

  return format(hours, mins, secs);
}
export function deg2dms(deg: number): string {
  deg = deg % 360;
  if (deg >= 270) deg = deg - 360;

  const degrees = Math.trunc(deg);
  const rest = (deg - degrees) * 60;
  const mins = Math.trunc(rest);
  const secs = (rest - mins) * 60;
  const prefix = deg < 0 ? '-' : '';

  return prefix + format(Math.abs(degrees), Math.abs(mins), Math.abs(secs));
}

function format(h: number, m: number, s: number) {
  return h.toString().padStart(2, '0') + ':' + m.toString().padStart(2, '0') + ':' + s.toFixed(3).padStart(6, '0');
}
