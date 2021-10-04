import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';

const styles={
    borderRadius:"70px",
    height:"300px",
    width:"300px",
    margin:"20px",
    boxShadow:"2px 5px 10px "

}

const Home = () => {
    return (
        <div>
          <Carousel variant="dark"className="h-50" >
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./images/pic1.jpg"
                    alt="First slide"
                 
                    />
                    <Carousel.Caption>
                    <div className="h-70" >
                        <h1 className="bg-danger p-2 rounded  mx-auto w-50">MARTIAL X-FACTOR</h1>
                        <h5>TRAIN WITH BEST LEGENDS</h5>
                        <p>Become the best version  of yourself through martial art's</p>
                        <button className="btn btn-warning fs-2">BOOK NOW</button>
                    </div>                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./images/pic2.jpg"
                    alt="Second slide"
              
                    />
                    <Carousel.Caption>
                    <div className="h-70">
                    <h1 className="bg-danger p-2 rounded  mx-auto w-50">MARTIAL X-FACTOR</h1>
                    <h5>TRAIN WITH BEST LEGENDS</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="btn btn-warning fs-2">APPLY NOW</button>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/pic3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className='text-center h-70'>
                        <h1 className="bg-danger p-2 mx-auto rounded w-50">MARTIAL X-FACTOR</h1>
                        <h5>TRAIN WITH BEST LEGENDS</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button className="btn btn-warning fs-2">APPLY NOW</button>
                    </div>                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./images/pic4.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="h-70">
                        <h1 className="bg-danger p-2 rounded mx-auto w-50">MARTIAL X-FACTOR</h1>
                            <h5 >TRAIN WITH BEST LEGENDS</h5>
                            <p>Everyday we bring hope to millions of children in the worlds hardestplaces as a sign of Almighy's uncoditional love </p>
                            <button className="btn btn-warning fs-2">Book Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section>
                <h1 className="text-center text-success my-5">OUR CLASSES</h1>
            <Row xs={1} md={4} className="mx-5">
                <Col>
                    <Card className="border-0 my-5">
                        <Card.Img variant="top" src= "https://ae01.alicdn.com/kf/H25a0b138c8e34def9b1428b390ee02abt/Chinese-Kung-Fu-Traditional-Wushu-Clothing-for-Boys-Girls-Tai-Chi-Uniform-2020-New-Kids-China.jpg_Q90.jpg_.webp "style={styles}/>
                        <Card.Body>
                        <Card.Title>SAMURAIS </Card.Title>
                        <Card.Text>
                            Class duration : 3.00 - 4.00
                        </Card.Text>
                        <Card.Text>
                            ISABEL DOS SANTOS
                        </Card.Text>
                        <Card.Text>
                           Price : $ 18
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 my-5">
                        <Card.Img variant="top" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2021/08/05/0543cef8-f41d-11eb-97f9-89051db5b6c1_image_hires_215614.jpg?itok=6ug71ABY&v=1628171785"style={styles}/>
                        <Card.Body>
                        <Card.Title>POINT FIGHTING </Card.Title>
                        <Card.Text>
                            Class duration : 10.00 - 11.00
                        </Card.Text>
                        <Card.Text>
                            SAMATHA SNOW
                        </Card.Text>
                        <Card.Text>
                           Price : $ 23
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 my-5">
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/e8/2d/59/e82d595b60443ae5752a3b7274eab34e.jpg"style={styles}/>
                        <Card.Body>
                        <Card.Title>PLAYING MANTIS KUNGFU </Card.Title>
                        <Card.Text>
                            Class duration : 9.00 - 10.00
                        </Card.Text>
                        <Card.Text>
                         CHRISOPHER LEE
                        </Card.Text>
                        <Card.Text>
                           Price : $ 40
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 my-5">
                        <Card.Img variant="top" src=" https://media.istockphoto.com/photos/karateka-breaking-a-wooden-board-with-his-hand-picture-id1152868495?s=170667a"style={styles}/>
                        <Card.Body>
                        <Card.Title>TITANS </Card.Title>
                        <Card.Text>
                            Class duration :9.00- 10.00 
                        </Card.Text>
                        <Card.Text>
                            KIM CHALMERS
                        </Card.Text>
                        <Card.Text>
                           Price : $ 28
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                
            </Row>
                <Link to="/classes">
                    <button className="btn btn-danger py-2 mx-auto my-4 fw-bold"><i class="fas fa-arrow-right me-2 fs-3"></i>  SHOW MORE</button>
                </Link>
            <Blogs></Blogs>    
            </section>
        </div>
    );
};

export default Home;