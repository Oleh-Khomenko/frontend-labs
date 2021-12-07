import { useEffect, useState } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 800);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div>
      <h1>{ currentTime.toUTCString() }</h1>
    </div>
  );
}
