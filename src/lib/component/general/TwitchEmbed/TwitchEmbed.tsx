import React from 'react';
import './TwitchEmbed.scss';

interface TwitchStreamer {
  name: string;
}

interface TwitchEmbedProps {
  streams: TwitchStreamer[];
}

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({ streams }) => {
  if (!streams) {
    return null;
  }

  return (
    <div className="twitchEmbedsContainer">
      {streams.map((stream, index) => (
        <iframe
          key={stream.name}
          title={`${stream.name}-${index + 1}`}
          src={`https://player.twitch.tv/?channel=${stream.name}&parent=localhost`}
          className="twitchEmbed"
          frameBorder="0"
          allowFullScreen
        />
      ))}
    </div>
  );
};

export default TwitchEmbed;
