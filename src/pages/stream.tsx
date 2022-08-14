import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../lib/component/layout/Layout';
import TwitchEmbed from '../lib/component/general/TwitchEmbed/TwitchEmbed';

interface StreamPageProps {
  location: {
    state: {
      streams: string[];
    };
  };
}

const StreamPage: React.FC<StreamPageProps> = ({ location }) => {
  if (location.state === null) {
    alert('You need a minimum of one stream to use the stream page');
    navigate('/');
    return null;
  }

  if (location.state.streams.includes('')) {
    alert('Please make sure to include a stream for each input selected');
    navigate('/');
    return null;
  }

  return (
    <Layout>
      <TwitchEmbed streams={location.state.streams} />
    </Layout>
  );
};
export default StreamPage;
