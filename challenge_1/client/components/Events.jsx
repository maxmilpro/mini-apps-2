import React from 'react';
import Event from './Event.jsx';

const Events = ({data}) => {
  return (
    <div>
        <ul>
          {data.map((item, index) => (
            <Event key={index} event={item}/>
          )).slice(0, 20)}
        </ul>
      </div>
  )
};

export default Events;