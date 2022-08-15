import { navigate } from 'gatsby';
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

  const streams: string[] = [];

  const handleBackButton = () => {
    setIsOpen(false);
    setNumberOfStreamsChosen(0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    for (let i = 0; i < numberOfStreamsChosen; i += 1) {
      const streamValue = (event.currentTarget.elements[i] as HTMLInputElement)
        .value;
      streams.push(streamValue.substring(streamValue.lastIndexOf('/') + 1));
    }
    navigate('/stream', { state: { streams } });
  };

  return (
    <div className="streamInputModal">
      <button type="button" className="backButton" onClick={handleBackButton}>
        <span>BACK</span>
      </button>
      <h3>
        Enter the name of the stream{numberOfStreamsChosen > 1 ? 's' : ''}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="streamInputsWrapper">
          {(() => {
            const streamInputs = [];
            for (let i = 0; i < numberOfStreamsChosen; i += 1) {
              streamInputs.push(
                <div className="streamInputContainer">
                  <input key={i} type="text" />
                </div>
              );
            }
            return streamInputs;
          })()}
        </div>
        <button type="submit" className="watchButton">
          <span>WATCH</span>
        </button>
      </form>
    </div>
  );
};

export default StreamInputModal;
