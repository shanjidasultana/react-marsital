import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Class = (props) => {
    const {title,time,name,picture,details,price} =props.class;
    return (
        // <div>
        
            <Col>
                <Card className="border-0 shadow" style={{borderRadius:"15px",height:"650px"}} >
                    <Card.Img variant="top" src={picture}  style={{padding:"20px",borderRadius:"40px",}} height="450"/>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{name} </Card.Title>
                    <Card.Title>{time}</Card.Title>
                    <Card.Title> $ {price}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 100)};
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
        // </div>
    );
};

export default Class;