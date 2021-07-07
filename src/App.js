import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [cycle, setCycle] = useState([]);

  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const miliseconds = ("0" + ((time / 10) % 100)).slice(-2);

  const timer = `${minutes} : ${seconds} : ${miliseconds}`;

  const handleCycle = () => {
    setCycle([...cycle, timer]);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      {/* <h2>stoper</h2> */}
      <div className="timer-wrap">
        <div className="timer" id="timer">
          <span>{timer}</span>
        </div>
        <div className="buttons" id="buttons">
          {!timerOn && time === 0 && (
            <button className="start" onClick={() => setTimerOn(true)}>
              Start
            </button>
          )}
          {timerOn && (
            <button className="cycle" onClick={handleCycle}>
              Cycle
            </button>
          )}
          {timerOn && (
            <button className="stop" onClick={() => setTimerOn(false)}>
              Stop
            </button>
          )}
          {!timerOn && time > 0 && (
            <button className="reset" onClick={() => setTime(0)}>
              Reset
            </button>
          )}
          {!timerOn && time > 0 && (
            <button className="start" onClick={() => setTimerOn(true)}>
              Resume
            </button>
          )}
        </div>
      </div>
      {cycle.length >= 1 ? (
        <div className="results">
          <div className="results-list">
            {cycle.map((item, i) => (
              <p key={i}>
                series {i + 1}: {item}
              </p>
            ))}
          </div>
          <div>
            {!timerOn && cycle.length > 0 && (
              <button
                className="clear"
                onClick={() => {
                  setCycle([]);
                  setTime(0);
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
