import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container fluid className="bg-info text-dark ">
               
                <Row className="my-4 p-5">
                    <Col xs={6} md={4}>
                    <img src="./images/martial-arts.png" width="100" alt="" />
                        Martial X-Factor
                        <p>The best fighter is never angry</p>
                        <p>203, Envato Labs, Behind Alis Steet, Melbourne, Australia.</p>
                        <p> 123-456-789</p>
                        <p>contact@yourdomain.com </p>
                        <p>  www.yourdomain.com</p>

                    </Col>
                    <Col xs={6} md={4} >
                        <h3>Opening Hours</h3>
                        <div  className="d-flex  ">
                            <p>Mon - Tues : </p>
                            <p p className="ms-5"> 6.00 am - 10.00 pm</p>
                        </div>
                        <div className="d-flex ">
                            <p>Wednes - Thurs :  </p>
                            <p className="ms-5"> 8.00 am - 6.00 pm</p>
                        </div>
                        <div className="d-flex ">
                            <p>Fri : </p>
                            <p className="ms-5"> 3.00 am - 8.00 pm</p>
                        </div>
                        <div className="d-flex ">
                            <p>Sun : </p>
                            <p className="ms-5">Closed</p>
                        </div>
                        
            
                    </Col>
                    <Col xs={6} md={4}>
                        <h2>Contact With Us</h2>
                        <p> <i class="fab fa-facebook-square fa-2x text-dark"></i></p>
                        <p><i class="fab fa-twitter fa-2x text-dark"></i></p>
                        <p><i class="fab fa-skype fa-2x text-dark"></i></p>
                        <p><i class="fab fa-pinterest fa-2x text-dark"></i></p>
                        <p><i class="fab fa-instagram fa-2x text-dark"></i></p>
            
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;