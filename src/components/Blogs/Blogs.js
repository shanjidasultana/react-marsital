import React from 'react';
import { Card, CardGroup, Col, Row ,Container} from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h1 className="my-3">News & <span className="text-danger ">blogs</span></h1>
            <p>Join our martial art club and be healthy.</p>
            <Container >
            <CardGroup className="mx-auto">
                    <Row xs={1} md={3} className="g-5 mx-auto">
                        {/* <Col xs={6} md={4} className="bg-success p-2 me-1 text-white"> */}
                        <Col>
                            <Card style={{height:'640px'}} >
                                <Card.Img variant="top" src="https://media.istockphoto.com/photos/children-at-lesson-in-karate-picture-id1188330903?k=20&m=1188330903&s=612x612&w=0&h=tOQAARjqxIAXdXDuGS3OAsBb8KuIrcmdRBqUWuywH0o=" />
                                <Card.Body>
                                <Card.Title>This is the standared post with thumbnail</Card.Title>
                                <Card.Text>
                                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.

                                </Card.Text>
                                <button className="btn btn-danger">Read More <i class="fas fa-stream fs-3 ms-3"></i></button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card  style={{height:'640px'}}>
                                <Card.Img variant="top" src="https://www.wellnessliving.com/blog/wp-content/uploads/2019/02/Teaching-Children-Martial-Arts.jpg" />
                                <Card.Body>
                                <Card.Title>This is the standared post with thumbnail</Card.Title>
                                <Card.Text>
                                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.

                                </Card.Text>
                                <button className="btn btn-danger">Read More <i class="fas fa-stream fs-3 ms-3"></i></button>

                                </Card.Body>

                            </Card>
                        </Col>
                        <Col>
                            <Card style={{height:'640px'}} >
                                <Card.Img variant="top" src="http://www.paradismartialarts.com/paradis2015/wp-content/uploads/2015/02/kids-karate.jpg" />
                                <Card.Body>
                                <Card.Title>This is the standared post with thumbnail</Card.Title>
                                <Card.Text>
                                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.

                                </Card.Text>
                                <button className="btn btn-danger">Read More <i class="fas fa-stream fs-3 ms-3"></i></button>

                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
            </CardGroup>
        </Container>
        </div>
    );
};

export default Blogs;