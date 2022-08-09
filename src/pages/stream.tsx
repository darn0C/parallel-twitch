import React from 'react';
import Layout from '../lib/component/layout/Layout';
import TwitchEmbed from '../lib/component/general/TwitchEmbed/TwitchEmbed';

const StreamPage = () => (
  <Layout>
    <TwitchEmbed streams={[{
      name: '1',
    }, {
      name: '2',
    }, {
      name: '3',
    }, {
      name: '4',
    }]}
    />
  </Layout>
);

export default StreamPage;
