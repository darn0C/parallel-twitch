import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../lib/component/layout/Layout';
import TwitchEmbed from '../lib/component/general/TwitchEmbed/TwitchEmbed';

interface StreamPageProps {
  location: any;
}

const StreamPage: React.FC<StreamPageProps> = ({ location }) => {
  if (location.state === null) {
    alert('You need a minimum of one stream to use the stream page');
    return navigate('/');
  }

  return (
    <Layout>
      <TwitchEmbed streams={location.state.streams} />
    </Layout>
  );
};

export default StreamPage;
