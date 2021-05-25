import React from 'react';
import Event from './Event.jsx';

const Events = ({ events }) => {
  const listOfEvents = events.map((event, index) => {
    return <Event key={index} event={event}/>
  });
  return <div>{listOfEvents}</div>
};

export default Events;