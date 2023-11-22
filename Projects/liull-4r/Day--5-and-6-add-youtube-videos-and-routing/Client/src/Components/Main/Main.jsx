// import React from 'react'
import ActorandWatch from "./Actor&Watch";
import Alert from "./Alert";
import ArcadeandAppleCard from "./Arcade&AppleCard";

import Ipad from "./Ipad";
import Iphone11andCovid from "./Iphone11&Covid";
import Iphone11pro from "./Iphone11pro";
import MacBook from "./MackBook";

import YoutubeVideos from "../Youtube/YoutubeVideos";

function Main() {
  return (
    <>
      <Alert />
      <Ipad />
      <MacBook />
      <Iphone11pro />
      <Iphone11andCovid />
      <ActorandWatch />
      <ArcadeandAppleCard />
      <YoutubeVideos />
    </>
  );
}

export default Main;
