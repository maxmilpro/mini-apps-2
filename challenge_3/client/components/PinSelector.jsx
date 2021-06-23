import React from 'React';

const PinSelector = () => {
  return (
    <div>
      {
        [...new Array(10)].map((element, index) => <div>{index + 1}</div>)
      }
    </div>
  )
};

export default PinSelector;
