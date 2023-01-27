import React from 'react';
import { getRandomDate, getRandomNumber } from './components/utils/random';
import { getRandomMatrix } from './components/utils/random';
import { getRandomArrayElement } from './components/utils/random';

function App() {
 
  // console.log(getRandomMatrix(5, 6, 2, 8));
  // getRandomMatrix(5, 6, 2, 8)

  // console.log(getRandomArrayElement([5, 6, 2, 8, 5, 6, 2, 8]));
  getRandomDate(1970, 1980);
  return <div></div>
}

export default App;
