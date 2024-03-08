import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const ContentComp = () => {
  return (
    <Container className="ctr">
      <Row className="crd mb-4 align-items-center">
        <Row>
          {/* <Image
            src="./Group 3.png"
            className="mb-5 mx-4"
            style={{ width: "200px", height: "150px" }}
            alt="Ornamen"
          /> */}

          <div className="content">
            <h1>Mengapa Memilih Tryout Online</h1>
            <h1>CPNS Kami?</h1>
          </div>
        </Row>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./iconQnA.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Soal Terkini Dan Terupdate</Card.Title>
                <Card.Text>
                  Kami selalu menyediakan soal-soal terikini dan terupdate
                  sesuai dengan kurikulum dan persyaratan terbaru CPNS.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./iconQnA.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Soal Terkini Dan Terupdate</Card.Title>
                <Card.Text>
                  Kami selalu menyediakan soal-soal terikini dan terupdate
                  sesuai dengan kurikulum dan persyaratan terbaru CPNS.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./iconQnA.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Soal Terkini Dan Terupdate</Card.Title>
                <Card.Text>
                  Kami selalu menyediakan soal-soal terikini dan terupdate
                  sesuai dengan kurikulum dan persyaratan terbaru CPNS.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./iconQnA.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Soal Terkini Dan Terupdate</Card.Title>
                <Card.Text>
                  Kami selalu menyediakan soal-soal terikini dan terupdate
                  sesuai dengan kurikulum dan persyaratan terbaru CPNS.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Image
          src="./Group 3.png"
          className="mb-9 mx-4"
          style={{
            width: "200px",
            height: "150px",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          alt="Ornamen"
        /> */}
      </Row>
    </Container>
  );
};

export default ContentComp;
