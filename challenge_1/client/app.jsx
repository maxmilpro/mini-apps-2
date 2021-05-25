import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Events from './components/Events.jsx';

const App = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get('/events')
      .then(res => {
        setEvents(res.data);
      })
      .catch();
  }, []);

  return (
    <>
      <h1>Historical Events Finder</h1>
      <Events events={events}/>
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
