import React from 'react';
import './Chatpdf.css';

const Chatpdf = ({ url }) => {
  return (
    <div className="embed-container">
      <iframe
        src={url}
        title="External Website"
        className="embed-frame"
      />
    </div>
  );
};

export default Chatpdf;
