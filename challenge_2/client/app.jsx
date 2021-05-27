import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TimeSeries from './components/TimeSeries.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json');
        const bpi = response.data.bpi;
        setData(Object.values(bpi));
        setLabels(Object.keys(bpi));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Cryptocurrency Charting Tool</h1>
      <TimeSeries data={data} labels={labels}/>
      <div>Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a></div>
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('chart'));

