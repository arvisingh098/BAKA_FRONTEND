import React from 'react';

const GlowingStar = ({width, height}) => {
  return (
    <div className={`starburst ${width ? `w-${width}` : 'w-48'} ${height ? `h-${height}` : 'h-48'}`}>
      {/* <div className="beam rotate-0"></div> */}
      <div className="beam rotate-45"></div>
      <div className="beam rotate-90"></div>
      {/* <div className="beam rotate-135"></div> */}
    </div>
  );
};

export default GlowingStar;
