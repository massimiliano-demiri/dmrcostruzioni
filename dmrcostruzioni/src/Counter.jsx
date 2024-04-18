import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < targetNumber) {
        setCounter(prevCounter => prevCounter + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [counter, targetNumber]);

  return <h1 style={{ color: '#616163', fontFamily: 'Russo One', fontSize: '100px', marginBottom: '0', marginTop: '0' }}>{counter}</h1>;
};

export default Counter;
