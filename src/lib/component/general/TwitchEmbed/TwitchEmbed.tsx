import React from 'react';
import './TwitchEmbed.scss';

interface TwitchEmbedProps {
  streams: string[];
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
            key={stream}
            title={`${stream}-${index}`}
            src={`https://player.twitch.tv/?channel=${stream}&parent=${window.location.hostname}`}
            className="twitchVideoEmbed"
            frameBorder="0"
            allowFullScreen
          />
        ))}
      </div>
      <div className="twitchChatEmbedContainer">
        <iframe
          title={`${streams[0]}`}
          src={`https://www.twitch.tv/embed/${streams[0]}/chat?parent=${window.location.hostname}`}
          className="twitchChatEmbed"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default TwitchEmbed;
