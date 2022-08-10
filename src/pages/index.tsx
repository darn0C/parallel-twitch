import React from 'react';
import Layout from '../lib/component/layout/Layout';
import Instructions from '../lib/component/general/Instructions/Instructions';
import StreamLayoutSelector from '../lib/component/general/StreamLayoutSelector/StreamLayoutSelector';

const IndexPage = () => (
  <Layout>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
      <Instructions />
      <StreamLayoutSelector />
    </div>
  </Layout>
);

export default IndexPage;
