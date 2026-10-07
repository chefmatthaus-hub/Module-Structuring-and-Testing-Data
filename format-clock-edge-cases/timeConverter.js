function formatAs12HourClock(time) {
  
  const [hoursStr, minutesStr] = time.split(':');
  const hours = Number(hoursStr);
  const minutes = minutesStr;

  if (hours === 0 || hours === 24) {
    return `12:${minutes} am`
  }

  if (hours === 12) {
    return `12:${minutes} pm`
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }

  const formattedHours = String(hours).padStart(2, '0');
  return `${formattedHours}:${minutes} am`;
}

export {formatAs12HourClock};