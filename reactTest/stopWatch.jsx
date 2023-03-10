import React, { Fragment, useState, useRef, useEffect } from 'react';

function Solution() {
  const [timerStr, setTimerStr] = useState('00:00');
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    console.log('play')
    const tempArr = timerStr.split(":");
    const newTime = parseInt(tempArr[0]) * 60 + parseInt(tempArr[1]) - 1;
    if (newTime < 0) {
      setIsRunning(false);
      return;
    };
    setTimerStr(getTimeStr(newTime));
  }, isRunning ? 1000 : null);

  const getTimeStr = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    return `${min}:${sec}`;
  }

  const getStart = () => {
    const temp = minutes * 60 + seconds;
    setTimerStr(getTimeStr(temp));
    setIsRunning(true);
  }
  const getReset = () => {
    setIsRunning(false);
    setTimerStr('00:00');
    setMinutes(0);
    setSeconds(0);
  }

  const setMinutesHandler = (e) => {
    if (e.target.value < 0) return;
    setMinutes(parseInt(e.target.value));
  }
  const setSecondsHandler = (e) => {
    if (e.target.value < 0) return;
    setSeconds(parseInt(e.target.value));
  }

  return (
    <Fragment>
      <label>
        <input type="number" value={minutes} onChange={setMinutesHandler}/>
        Minutes
      </label>
      <label>
        <input type="number" value={seconds} onChange={setSecondsHandler}/>
        Seconds
      </label>

      <button onClick={getStart}>START</button>
      <button onClick={() => setIsRunning(!isRunning)}>PAUSE / RESUME</button>
      <button onClick={getReset}>RESET</button>

      <h1 data-testid="running-clock">{timerStr}</h1>
    </Fragment>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef(); 
  useEffect(() => {
    savedCallback.current = callback; 
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) { 
      let id = setInterval(tick, delay); 
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Solution;
