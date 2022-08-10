import React from 'react';
import StreamLayout from '../StreamLayout/StreamLayout';
import './StreamLayoutSelector.scss';

const StreamLayoutSelector: React.FC = () => (
  <div className="streamLayoutSelectorContainer">
    {(() => {
      const streamLayouts = [];
      for (let i = 0; i < 4; i += 1) {
        streamLayouts.push(<StreamLayout key={i} numberOfScreens={i} />);
      }
      return streamLayouts;
    })()}
  </div>
);

export default StreamLayoutSelector;
