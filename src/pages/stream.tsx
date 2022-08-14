import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../lib/component/layout/Layout';
import TwitchEmbed from '../lib/component/general/TwitchEmbed/TwitchEmbed';

interface StreamPageProps {
  location: any;
}

const StreamPage: React.FC<StreamPageProps> = ({ location }) => {
  if (location.state === null || location.state.streams.length ===  0) {
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
