import React, { useState, useEffect } from 'react';
import Layout from '../lib/component/layout/Layout';
import Instructions from '../lib/component/general/Instructions/Instructions';
import StreamLayoutSelector from '../lib/component/general/StreamLayoutSelector/StreamLayoutSelector';
import StreamInputModal from '../lib/component/general/StreamInputModal/StreamInputModal';

const IndexPage = () => {
  const [numberOfStreamsChosen, setNumberOfStreamsChosen] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (numberOfStreamsChosen > 0) {
      setIsModalOpen(true);
    }
  }, [numberOfStreamsChosen]);

  return (
    <Layout>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Instructions />
        {isModalOpen ? (
          <StreamInputModal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            numberOfStreamsChosen={numberOfStreamsChosen}
            setNumberOfStreamsChosen={setNumberOfStreamsChosen}
          />
        ) : (
          <StreamLayoutSelector
            setNumberOfStreamsChosen={setNumberOfStreamsChosen}
          />
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
