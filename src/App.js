import React, { useRef } from 'react';
import './App.css';

// dot notation is a way to access an object's key, or property
// . === 's
// document is an object
// document has a property called querySelector

// a selector is a way to describe an element specified by html and css stuff
// <div></div> select it by its tag name of a div
// document.querySelector('div')
// <div className="clock"></div>
// document.querySelector('.clock')




// setInterval(setDate, 1000);

// setDate();



function App() {


  // const clock = useRef(null);
  const secondHand = useRef(null);
  // { current: htmlElement}
  // console.log("clock ref", clock);
  console.log("secondHand", secondHand);

  const secStyle = {
    backgroundColor: 'red',
  };

  const minsHand = useRef(null);
  console.log('minsHand', minsHand);

  const minStyle = {
    backgroundColor: 'purple',
  };

  
  
  const hourHand = useRef(null);
  console.log('hourHand', hourHand);

  const hourStyle = {
    backgroundColor: 'pink',
  };

  // const changeToYellow = () => {
  //   if (clock.current) clock.current.style.backgroundColor = 'yellow';
  // }


  const updateSecondHand = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`;
  }
  setInterval(updateSecondHand, 1000);

  const updateMinsHand = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.current.style.transform = `rotate(${minsDegrees}deg)`;
  }
 setInterval(updateMinsHand, 1000);

  const updateHourHand = () => {
    const now = new Date();
    const mins = now.getMinutes();
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.current.style.transform = `rotate(${hourDegrees}deg)`;
  }
  setInterval(updateHourHand, 1000);


  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <title>JS + CSS Clock</title>
      </head>
      <body>
        <button type="button" style={secStyle} onClick={updateSecondHand}>Update Seconds</button>
        <button type="button" style={minStyle} onClick={updateMinsHand}>Update Minutes</button>
        <button type="button" style={hourStyle} onClick={updateHourHand}>Update Hour</button>
        {/* ref={clock} let's store a reference to this element 
            inside of the variable clock*/}
        <div
          className="clock" 
          // ref={clock} onClick={changeToYellow}
        >
          <div className="clock-face">
            <div className="hand hour-hand" ref={hourHand}></div>
            <div className="hand min-hand" ref={minsHand}></div>
            <div className="hand second-hand" ref={secondHand}></div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;

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
  // create a state called currentTime
  // In your APP's jsx, create a h1 tag under neath the clock
  // the h1 tag will contain the value of your currentTime
  // create a button with the name "update current time"
  // create a function called updateCurrentTime 
    // which allows you to modify your currentTime state, to the most recent time
    // new Date()
  // when you click the button "update current time", it will call the function "updateCurrentTime"
    // and it will change the value of your state, thus changing the h1 tag
