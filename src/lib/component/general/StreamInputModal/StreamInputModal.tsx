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
      <button type="button" onClick={handleBackButton}>
        BACK
      </button>
      <h3>
        Enter the name of the stream{numberOfStreamsChosen > 1 ? 's' : ''}
      </h3>
      <form onSubmit={handleSubmit}>
        {(() => {
          const streamInputs = [];
          for (let i = 0; i < numberOfStreamsChosen; i += 1) {
            streamInputs.push(<input key={i} type="text" />);
          }
          return streamInputs;
        })()}
        <button type="submit">WATCH</button>
      </form>
    </div>
  );
};

export default StreamInputModal;
