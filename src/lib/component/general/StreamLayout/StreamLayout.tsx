import React from 'react';
import './StreamLayout.scss';

interface StreamLayoutProps {
  numberOfScreens: number;
}

const StreamLayout: React.FC<StreamLayoutProps> = ({ numberOfScreens }) => (
  <>
    <h3>{`${numberOfScreens + 1} Stream${numberOfScreens > 0 ? 's' : ''}`}</h3>
    <div className="streamLayoutContainer">
      {(() => {
        const streamLayoutScreens = [];
        for (let i = 0; i < numberOfScreens + 1; i += 1) {
          streamLayoutScreens.push(<div key={i} className="streamLayoutScreen" />);
        }
        return streamLayoutScreens;
      })()}
    </div>
  </>
);

export default StreamLayout;
