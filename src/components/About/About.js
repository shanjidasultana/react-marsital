import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        
            <Container fluid className="my-5">
                <h1 className="text-primary my-4 text-decoration-underline p-2">ABOUT US</h1>
                <Row>
                    <Col xs={6}>
                       <h2>Welcome To Our <span className="text-danger">Martial X-Factor</span> </h2>
                        <p></p>
                        <Row>
                            <div className="d-flex justify-space-between align-items-center ">
                                <img src="./images/icon1.png"  alt="" className=" w-25 "/>
                               <div>
                                <h3 className="text-warning">Amerucan Karate</h3>
                                <p><small className="text-secondery">There are many titles of honor in the martial arts. These titles are given and earned above and beyond earning the coveted rank of black belt</small></p>

                               </div>                    
                            </div>                        
                            <div className="d-flex justify-space-between align-items-center ">
                                <img src="./images/icon2.jpg"  alt="" className=" w-25 "/>
                                <div>
                                    <h3 className="text-warning">Shuri Ryu</h3>
                                    <p><small className="text-secondery">There are many titles of honor in the martial arts. These titles are given and earned above and beyond earning the coveted rank of black belt</small></p>
                                </div>
                            </div>                        
                            <div className="d-flex justify-space-between align-items-center">
                            <img src="./images/icon3.jpg"  alt="" className=" w-25 "/>
                                <div>
                                    <h3 className="text-warning">Combatives</h3>
                                    <p><small className="text-secondery">There are many titles of honor in the martial arts. These titles are given and earned above and beyond earning the coveted rank of black belt</small></p>
                                </div>
                            </div>                        
                            <div className="d-flex justify-space-between align-items-center ">
                                <img src="./images/icon5.jpg"  alt="" className=" w-25 "/>
                               <div>
                                    <h3 className="text-warning">Oom Yung Doe</h3>
                                    <p ><small className="text-secondery">There are many titles of honor in the martial arts. These titles are given and earned above and beyond earning the coveted rank of black belt</small></p>
                               </div>                           
                             </div>                        
                            
                        </Row>
                    </Col>
                    <Col xs={6} style={{marginTop:"150px"}}>
                        <img src="./images/about.png" alt="" srcset="" />
                    </Col>
                </Row>

            </Container>
      
    );
};

export default About;