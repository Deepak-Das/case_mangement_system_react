import React from "react";
import { Container, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import { Overview } from "../components/Overview";
import CardList from "../components/cards/cardList";
import Gallery from "../components/gallery.js";

const Home = () => {
  return (
    <Layout>
      <Showcase />
      <Overview />
      <Container>
        <Row md={3} className="justify-content-around">
          <CardList />
        </Row>
      </Container>
      <Gallery />
    </Layout>
  );
};

export default Home;
