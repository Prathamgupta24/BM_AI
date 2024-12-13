import React from 'react';
import './ExternalWebsiteEmbed.css';

const ExternalWebsiteEmbed = ({ url }) => {
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

export default ExternalWebsiteEmbed;
