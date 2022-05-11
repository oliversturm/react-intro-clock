import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import AmPmIndicator from './AmPmIndicator';

const Clock = () => {
  const [time, setTime] = useState('');
  const [amPm, setAmPm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const d = dayjs();
      setTime(d.format('hh:mm:ss'));
      setAmPm(d.format('A'));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log('Rendering clock for time', time);
  return (
    <div>
      <AmPmIndicator amPm={amPm} />
      <div style={{ fontSize: '20pt' }}>{time}</div>
    </div>
  );
};

export default Clock;
