import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <Container>
            <h1 className="mt-5  mb-2 text-danger">Welcome</h1>
            <p className="w-50 mx-auto mb-5 text-muted">LIRTYAS NIPAIADE SOLERN ATUR AUT ODU SEUOLORES DESQUI RATIONE VOLUPTATE MSIRE CNEQUE PORRO QUISIUAM MIUASE SERQUI DOLOREM IPSUMUIA DOLOR</p>
            <Row className=" mx-auto">
                <Col xs={12} md={8}>
                    <img src="https://image.shutterstock.com/image-photo/white-karate-fighter-isolated-on-600w-512899078.jpg" alt="" />
                </Col>
                <Col xs={6} md={4}>
                    <h2 className="mx-4 text-info ">Health Benefits</h2>
                    <h6>6 amazing health benefits of Martial Arts<span className="text-warning">Improves cardiovascular health. Martial arts requires you to undergo vigorous exercise. ...,Improves your flexibility. ...,Helps in losing weight. ...,Keeps blood pressure in check. ...,Improves reflexes. ...,Helps you achieve an overall healthy lifestyle.</span></h6>
                    <p className="text-muted">Martial arts offers an opportunity to not only enhance your physical health but your mental health, too. Stress relief. Martial arts can help reduce stress and anxiety by encouraging you to practice deep breathing, meditation, and mindfulness.</p>
                </Col>
            </Row >
            <Row className=" mx-auto">
                <Col xs={6} md={4} >
                    <h2 className="mx-4 text-info ">Meditation</h2>
                    <h6>7 Critical Elements That Every Martial Artist Must Work On:<span className="text-warning">Agility. Agility is a person's ability to move quickly and easily in a way that is effective and efficient. ...,Endurance. ...,Speed..,Explosive Power. ...,Core Strength. ...,Reaction time. ...,Flexibility.</span></h6>
                    <p className="text-muted">All martial arts contain practices that requires deep, abdominal breathing with an exhalation that is longer than the inhalation. ... The Chi breathing meditation focuses upon the breath for the purpose of circulating and becoming aware of the levels of chi present within the body</p>

                </Col>
                <Col xs={12} md={8}>
                    <img src="https://media.istockphoto.com/photos/the-girl-in-a-sports-kimono-meditates-picture-id147694920?k=20&m=147694920&s=612x612&w=0&h=YioPdjUL_t50ijZ9KwYgLvu1DwFNcKj0QHZWDcbq-TA="alt="" />
                </Col>
            </Row>
            <Row className=" mx-auto my-5">
                <Col xs={12} md={8}>
                    <img src="https://t4.ftcdn.net/jpg/03/87/01/17/360_F_387011785_sNuVuVnEHgCGXpcFNpc4a0t3naFMYrsG.jpg" alt="" />
                </Col>
                <Col xs={6} md={4}>
                    <h2 className="mx-4 text-info ">Self-Defence</h2>
                    <h6>7 Best Martial Arts for Women:<span className="text-warning">Krav Maga,MMA. ., Judo.,Muay Thai (Kickboxing) ..,Jiu-Jitsu. ...,Karate. Karate is arguably the most popular martial art on the planet, and it is also a surprisingly good foundation for self-defense. ...,Taekwondo. Taekwondo, a Korean martial arts style, is one of the most recent ones to be created. ...Taekwondo. Taekwondo, a Korean martial arts style, is one of the most recent ones to be created. ...</span></h6>
                    <p className="text-wrap">You learn to check your emotions, stay calm in stressful situations, and be more aware of your surroundings. All of these skills can be translated for use in your everyday life, from the work environment</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;