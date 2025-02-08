import React from 'react';
import no_data from '@assets/images/no_data_image.jpg';



const DynamicNoDataComponent = ({
  message = 'Sorry, there are no data here right now.',
  className = 'no_data_container',
}) => {
  return (
    <div className={`${className}`}>
      <img src={no_data} alt="No data" className={`no_data_image`} />
      <p className={`no_data_text`}>{message}</p>
    </div>
  );
};

export default DynamicNoDataComponent;
