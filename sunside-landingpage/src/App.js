import React from 'react';

import {Banner, BannerLabel, BannerIcon} from './components/Banner.style';

import { Services } from './components/Services';

import './index.css';

function App() {
  return (
    <>
  <Banner>
    <BannerLabel><h1>We are creatives</h1></BannerLabel>
      <BannerIcon src="./images/icon-arrow-down.svg"></BannerIcon>
  </Banner>

    <Services />





    </>
  );
}

export default App;
