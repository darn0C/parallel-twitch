import React from 'react';
import './StreamInputModal.scss';

interface StreamInputModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  numberOfStreamsChosen: number;
  setNumberOfStreamsChosen: React.Dispatch<React.SetStateAction<number>>;
}

const StreamInputModal: React.FC<StreamInputModalProps> = ({
  isOpen,
  setIsOpen,
  numberOfStreamsChosen,
  setNumberOfStreamsChosen,
}) => {
  if (!isOpen || numberOfStreamsChosen === 0) {
    return null;
  }

  const handleBackButton = () => {
    setIsOpen(false);
    setNumberOfStreamsChosen(0);
  };

  return (
    <div className="streamInputModal">
      <button type="button" onClick={handleBackButton}>
        BACK
      </button>
      <h3>
        Enter the name of the stream{numberOfStreamsChosen > 1 ? 's' : ''}
      </h3>
      <form>
        {(() => {
          const streamInputs = [];
          for (let i = 0; i < numberOfStreamsChosen; i += 1) {
            streamInputs.push(<input key={i} type="text" />);
          }
          return streamInputs;
        })()}
      </form>
    </div>
  );
};

export default StreamInputModal;
