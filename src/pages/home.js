import React from 'react';
import NavigationBar from '../components/Navigationbar';
import { Banner } from '../components/Banner';
import Showcase from '../components/Showcase';
import { Overview } from '../components/Overview';
import Footer from '../components/Footer';
import CardList from '../components/cards/cardList';
import { Container, Row } from 'react-bootstrap';
const Home = () => {
  return (
    <div>
      <Banner />
      <NavigationBar />
      <Showcase />
      <Overview />
      <Container className="">
        <Row md={3} className="justify-content-around">
          <CardList />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
