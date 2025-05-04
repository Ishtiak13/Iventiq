import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <PropagateLoader color="#cd603e" className="w-12 h-12 "/>
    </div>
  );
};

export default Loading;
