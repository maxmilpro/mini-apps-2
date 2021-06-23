import React from 'react';
import ReactDOM from 'react-dom';
import Scorecard from './components/Scorecard.jsx';
import PinSelector from './components/PinSelector.jsx';

const App = () => {
  return (
    <>
      <Scorecard/>
      <PinSelector/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

