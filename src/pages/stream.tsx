import React from 'react';
import Layout from '../lib/component/layout/Layout';
import TwitchEmbed from '../lib/component/general/TwitchEmbed/TwitchEmbed';

const StreamPage = () => (
  <Layout>
    <TwitchEmbed
      streams={[
        {
          name: 'tsm_imperialhal',
        },
        {
          name: 'knekro',
        },
        {
          name: 'blooprint',
        },
        {
          name: 'hiswattson',
        },
      ]}
    />
  </Layout>
);

export default StreamPage;
