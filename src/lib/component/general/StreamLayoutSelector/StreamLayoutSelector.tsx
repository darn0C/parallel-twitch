import React from 'react';
import StreamLayout from '../StreamLayout/StreamLayout';
import './StreamLayoutSelector.scss';

interface StreamLayoutSelectorProps {
  setNumberOfStreamsChosen: React.Dispatch<React.SetStateAction<number>>;
}

const StreamLayoutSelector: React.FC<StreamLayoutSelectorProps> = ({
  setNumberOfStreamsChosen,
}) => (
  <div className="streamLayoutSelectorContainer">
    {(() => {
      const streamLayouts = [];
      for (let i = 0; i < 4; i += 1) {
        streamLayouts.push(
          <StreamLayout
            key={i}
            numberOfScreens={i}
            setNumberOfStreamsChosen={setNumberOfStreamsChosen}
          />
        );
      }
      return streamLayouts;
    })()}
  </div>
);

export default StreamLayoutSelector;
