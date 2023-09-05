import { differenceInCalendarDays } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function LiveClock({ location }) {
  const [value, setValue] = useState(new Date());
  const [dayDiff, setDayDiff] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const zonedDate = utcToZonedTime(now, location.timeZone);
      setValue(zonedDate);
      
      const diff = differenceInCalendarDays(zonedDate, now);
      setDayDiff(diff);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [location.timeZone]);

  let dayText;
  if (dayDiff === 0) dayText = 'Today';
  else if (dayDiff === 1) dayText = 'Tomorrow';
  else if (dayDiff === -1) dayText = 'Yesterday';
  else dayText = format(value, 'EEEE', { timeZone: location.timeZone });

  return (
    <div>
      <Clock value={value} />
      <p className="text-lg font-bold text-center text-gray-800">{location.name}</p>
      <p className="text-sm text-center text-gray-500">{dayText}</p>
    </div>
  );
}

LiveClock.propTypes = {
  location: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired
};

export default LiveClock;
