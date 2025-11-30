import { useState } from 'react';

import './App.css';

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    // counter += 1;
    // setCounter(counter + 1);
    // React may batch multiple state updates in the same render-
    setCounter((prevCount) => prevCount + 1);
    // prevCount gets access to update value of counter, it's by default handled by React
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    // console.log(counter);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> React course with hitesh </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{' '}
      <button onClick={removeValue}>remove button</button>
      <p>footer: </p>
    </>
  );
}

export default App;
