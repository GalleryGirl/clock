import React, { useState } from 'react';


const AppleEater = () => {
  let numberOfApplesEaten = 0;

  // the first position of the array is the state
  // the second position of the array is the function to modify state
  const [ numberOfApplesEatenWithState, setNumberOfApplesEaten ] = useState(0);

  const eatApple = () => {
    numberOfApplesEaten = numberOfApplesEaten + 1;
    console.log(`I ate ${numberOfApplesEaten} apples today`)
  }

  const eatAppleWithState = () => {
    setNumberOfApplesEaten(numberOfApplesEatenWithState + 1)
  }
  
  return (
    <div>
      <h1>Eat your apple without state</h1>
      <h2>{`I ate ${numberOfApplesEaten} apples today`}</h2>
      <button onClick={eatApple}>eat apple</button>
      <br />
      <h1>Eat your apple with state</h1>
      <h2>{`I ate ${numberOfApplesEatenWithState} apples today`}</h2>
      <button onClick={eatAppleWithState}>eat apple</button>
    </div>
  )
}

export default AppleEater

// when a regualr JS variable changes, only the value of that variable is changed. Nothing else is affected really.

// when a react state changes, not only does the value of the variable change, but also, it triggers a 're-render'
  // of our component

// Array destructuring
// 1. allows you to assign variables to the matching positions of an array
// const favoriteIcecreams = ['pistachio', 'chocloate', 'peanutbutter'];
// const [topOne, topTwo, topThree] = favoriteIcecreams;
// 
