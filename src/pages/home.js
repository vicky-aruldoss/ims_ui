
import React from 'react';
import { A4Sub,Content } from './home.style';
import CoverPage from './coverPage';
import RecordPage from './recordPage';

const Home = () => {
  return (
    <>
      <CoverPage />
      <div class="main-page">
        <A4Sub>
          <Content>
            <RecordPage />
          </Content>
        </A4Sub>    
      </div>
    </>
);
}

export default Home;
