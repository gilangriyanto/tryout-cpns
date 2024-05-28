import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col className="col-lg-6 col-12 pb-5">
            <h1>
              Ujian <span>CPNS</span> Lebih Mudah Dengan Tryout Online Kami!
            </h1>

            <p>
              Melalui Platform Tryout Kami, Ujian CPNS Menjadi lebih mudah
              diatasi. Dapatkan pengalaman mirip Ujian sesungguhnya dan evaluasi
              hasil dengan cepat untuk perbaikan lebih lanjut.
            </p>

            <div>
              <a href="https://api-cpns.creazylab.works/login">
              <Button className="btn btn-light me-3">Register</Button>
              <Button className="btn btn-dark">Masuk</Button>
              </a>
              
            </div>
          </Col>

          <Col className="col-lg-6 col-12">
            <img src="./cpns-male.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
