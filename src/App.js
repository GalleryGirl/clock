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


// const secondHand = document.querySelector('.second-hand');
// const minsHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secondsDegrees = ((seconds / 60) * 360) + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const mins = now.getMinutes();
//   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   const hour = now.getHours();
//   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);

// setDate();



function App() {

  const clock = useRef(null);
  console.log("clock ref", clock);

  const changeToYellow = () => {
    if (clock.current) clock.current.style.backgroundColor = 'yellow';
  }

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <title>JS + CSS Clock</title>
      </head>
      <body>
        <div class="clock" ref={clock} onClick={changeToYellow}>
          <div class="clock-face">
            <div class="hand hour-hand"></div>
            <div class="hand min-hand"></div>
            <div class="hand second-hand"></div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
