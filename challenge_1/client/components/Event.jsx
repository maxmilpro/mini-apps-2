import React from 'react';

const Event = ({ event }) => {
  return (
    <li>
      <div>
        Description: {event.description}
      </div>
    </li>
  );
};

export default Event;
