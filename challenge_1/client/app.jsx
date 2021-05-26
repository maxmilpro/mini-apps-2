import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Event from './components/Event.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(`http://localhost:3000/events?q=${search}`);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [search]);

  return (
    <>
      <h1>Historical Events Finder</h1>
      <form onSubmit={e => {
        setSearch(query);
        e.preventDefault();
      }}>
        <input type="text" value={query} placeholder="Search" onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <Event key={index} event={item}/>
        )).slice(0, 20)}
      </ul>
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
