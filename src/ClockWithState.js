import React, { useRef, useState } from 'react';
import './App.css';

function ClockWithState() {

  let [ currentTime, setCurrentTime ] = useState(new Date());

  // const secondHand = useRef(null);

  const secStyle = {
    backgroundColor: 'red',
  };

  // const minsHand = useRef(null);
  // console.log('minsHand', minsHand);

  const minStyle = {
    backgroundColor: 'purple',
  };

  // const hourHand = useRef(null);
  // console.log('hourHand', hourHand);

  const hourStyle = {
    backgroundColor: 'pink',
  };

  // const updateSecondHand = () => {
  //   const seconds = currentTime.getSeconds();
  //   const secondsDegrees = ((seconds / 60) * 360) + 90;
  //   secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`;
  // }

  const getSecondHandDegrees = () => {
    const seconds = currentTime.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    return secondsDegrees;
  }

  // const updateMinsHand = () => {
  //   const seconds = currentTime.getSeconds();
  //   const mins = currentTime.getMinutes();
  //   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  //   minsHand.current.style.transform = `rotate(${minsDegrees}deg)`;
  // }

  const getMinuteHandDegrees = () => {
    const seconds = currentTime.getSeconds();
    const mins = currentTime.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    return minsDegrees;
  }

  // const updateHourHand = () => {
  //   const mins = currentTime.getMinutes();
  //   const hour = currentTime.getHours();
  //   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  //   hourHand.current.style.transform = `rotate(${hourDegrees}deg)`;
  // }

  const getHourHandDegrees = () => {
    const mins = currentTime.getMinutes();
    const hour = currentTime.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    return hourDegrees;
  }

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  }

  setInterval(updateCurrentTime, 1000);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <title>JS + CSS Clock</title>
      </head>
      <body>
        {/* <button type="button" style={secStyle} onClick={updateSecondHand}>Update Seconds</button> */}
        {/* <button type="button" style={minStyle} onClick={updateMinsHand}>Update Minutes</button> */}
        {/* <button type="button" style={hourStyle} onClick={updateHourHand}>Update Hour</button> */}
        <div className="container">
        <div className="clock">
          <div className="clock-face">
            <div
              className="hand hour-hand" 
              // ref={hourHand}
              style={{ transform: `rotate(${getHourHandDegrees()}deg)`}}
            ></div>
            <div
              className="hand min-hand"
              // ref={minsHand}
              style={{ transform: `rotate(${getMinuteHandDegrees()}deg)`}}
            ></div>
            <div
              className="hand second-hand"
              // ref={secondHand}
              style={{ transform: `rotate(${getSecondHandDegrees()}deg)`}}
            ></div>
          </div>
        </div>
        <h1>{`Current time is ${currentTime}`}</h1>
        <button type="button" onClick={updateCurrentTime}>Update Current Time</button>
        </div>
      </body>
    </html>
  );
}

export default ClockWithState;

// create a button with the name updateSeconds
// when we click updateSeconds, transform the second hand to the
    // correct position

// Task A: Practice setting up a click event, and connect it to an event handler
  // by using an onClick attribute on your target element

// 1. create a button with button text of updateMinutes
  // when element is clicked, update position of minute hand
// 2. do the same for hour hand

// Task B: Once Task A is done, you should have 3 functions that help you 
  // update the position of your clock hands
  // Research a javaScript function called setInterval, and use it to help you
  // update each of your clock hand postiion continuously

  // Task: continuously update your second hand using setInterval. 
// setInterval(setTime,1000);

// Task C: 
  // [√] create a state called currentTime
  // [√]In your APP's jsx, create a h1 tag underneath the clock
  // the h1 tag will contain the value of your currentTime

  // create a button with the name "update current time"
  // create a function called updateCurrentTime 
    // which allows you to modify your currentTime state, to the most recent time
    // new Date()
  // when you click the button "update current time", it will call the function "updateCurrentTime"
    // and it will change the value of your state, thus changing the h1 tag
  
  // use currentTime to update the clock's hour, minute, and second hand
