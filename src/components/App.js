import React from "react";
import NavigationBar from "./Navigationbar";
import { Banner } from "./Banner";
import Showcase from "./Showcase";
import { Overview } from "./Overview";
import Footer from "./Footer";
import CardList from "./cards/cardList";
import CardView from "./cards/card";
import { Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Banner />
      <NavigationBar />
      <Showcase />
      <Overview />
      <Container className="">
        <Row md={3} className="justify-content-around">
          <CardList className="" />
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default App;
