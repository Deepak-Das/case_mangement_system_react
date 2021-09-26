import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.scss';

function Footer() {
  return (
    <footer className="footer footer-bg">
      <Container className="py-3">
        <Row>
          <Col md={3} className="align-self-center">
            <h3>Services</h3>
            <ul>
              <li>N.G.O Registration</li>
              <li>Cyber Crimes</li>
              <li>Marriage or Divorce cases</li>
              <li>Cheating & Fraud cases</li>
              <li>Land Disputes</li>
            </ul>
          </Col>

          <Col md={7} className="my-5 my-md-0 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234447.66995607846!2d85.18124037459347!3d23.3431424976028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1632239151423!5m2!1sen!2sin"
              title="Location of adv. dks & associates main chambers"
              style={{ border: 0, minHeight: '276px', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              frameBorder="0"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>

            <p className="lead text-center">ADV-DKS & ASSOCIATE</p>
          </Col>
          <Col
            md={2}
            className="footer-social d-flex flex-md-column justify-content-center align-items-end"
          >
            <div className="footer-social__icons">
              <a href="#linkTOInsta" target="_blank">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a href="#linkToFB" target="_blank">
                <i className="fa fa-facebook-square fa-2x"></i>
              </a>
            </div>
            <div className="footer-social__icons">
              <a href="#linkToWhatsapp" target="_blank">
                <i className="fa fa-whatsapp fa-2x"></i>
              </a>
              <a href="#linkToTwitter" target="_blank">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
