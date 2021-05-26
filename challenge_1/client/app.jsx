import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Event from './components/Event.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('Asclepieion');
  const [url, setUrl] = useState('http://localhost:3000/events?q=Asclepieion');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (err) {
        setIsError(true);
      }
    }

    fetchData();
  }, [url]);

  return (
    <>
      <h1>Historical Events Finder</h1>

      <form onSubmit={e => {
        setUrl(`http://localhost:3000/events?q=${query}`);
        e.preventDefault();
      }}>
        <input type="text" value={query} placeholder="Search" onChange={e => setQuery(e.target.value)}/>
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      <ul>
        {data.map((item, index) => (
          <Event key={index} event={item}/>
        )).slice(0, 20)}
      </ul>
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
