import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json');
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <h1>Cryptocurrency Charting Tool</h1>
  )
};

ReactDOM.render(<App/>, document.getElementById('chart'));

