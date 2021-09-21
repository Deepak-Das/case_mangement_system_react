import React from "react";
import NavigationBar from "./Navigationbar";
import { Banner } from "./Banner";
import Showcase from "./Showcase";
import { Overview } from "./Overview";

const App = () => {
  return (
    <>
      <Banner />
      <NavigationBar />
      <Showcase />
      <Overview />
    </>
  );
};

export default App;
