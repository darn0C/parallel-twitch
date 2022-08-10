import React from 'react';
import './TwitchEmbed.scss';

interface TwitchStreamer {
  name: string;
}

interface TwitchEmbedProps {
  streams: TwitchStreamer[];
}

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({ streams }) => {
  if (!streams || window === undefined) {
    return null;
  }

  return (
    <div className="twitchEmbedsLayout">
      <div className="twitchVideoEmbedsContainer">
        {streams.map((stream, index) => (
          <iframe
            key={stream.name}
            title={`${stream.name}-${index + 1}`}
            src={`https://player.twitch.tv/?channel=${stream.name}&parent=${window.location.hostname}`}
            className="twitchVideoEmbed"
            frameBorder="0"
            allowFullScreen
          />
        ))}
      </div>
      <div className="twitchChatEmbedContainer">
        <iframe
          title={`${streams[0].name}`}
          src={`https://www.twitch.tv/embed/${streams[0].name}/chat?parent=${window.location.hostname}`}
          className="twitchChatEmbed"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default TwitchEmbed;
