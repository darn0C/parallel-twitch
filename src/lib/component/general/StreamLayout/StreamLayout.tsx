import React, { KeyboardEvent } from 'react';
import './StreamLayout.scss';

interface StreamLayoutProps {
  numberOfScreens: number;
  setNumberOfStreamsChosen: React.Dispatch<React.SetStateAction<number>>;
}

const StreamLayout: React.FC<StreamLayoutProps> = ({
  numberOfScreens,
  setNumberOfStreamsChosen,
}) => {
  const onKeyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setNumberOfStreamsChosen(numberOfScreens + 1);
    }
  };

  return (
    <>
      <h3>
        {`${numberOfScreens + 1} Stream${numberOfScreens > 0 ? 's' : ''}`}
      </h3>
      <div
        className="streamLayoutContainer"
        onClick={() => setNumberOfStreamsChosen(numberOfScreens + 1)}
        onKeyDown={onKeyDownHandler}
        role="button"
        tabIndex={numberOfScreens + 1}
      >
        {(() => {
          const streamLayoutScreens = [];
          for (let i = 0; i < numberOfScreens + 1; i += 1) {
            streamLayoutScreens.push(
              <div key={i} className="streamLayoutScreen" />
            );
          }
          return streamLayoutScreens;
        })()}
      </div>
    </>
  );
};

export default StreamLayout;
