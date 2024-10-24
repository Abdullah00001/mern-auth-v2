import React from 'react';

const DealyUtils = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default DealyUtils;
