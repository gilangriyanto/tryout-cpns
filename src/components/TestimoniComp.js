import React from "react";
import { Container, Row, Col, Image, Card, CardBody } from "react-bootstrap";

const TestimoniComp = () => {
  return (
    <Container style={{ minHeight: "100vh" }} className="pb-5">
      <div className="to pt-5">
        <h2>Testimoni</h2>
      </div>
      <Row>
        <Col className="col-12 col-lg-6">
          <Card className="border-0">
            <CardBody className="text-center">
              <Image
                src="./cpns-female.png"
                alt="Foto"
                className="w-75 testimoni rounded-5 shadow"
              />
              <div
                className="bg-dark rounded-4 text-white border-0 p-2 text-center w-50"
                style={{
                  marginTop: "-40px",
                  marginLeft: "22%",
                  zIndex: "0",
                  position: "absolute",
                }}
              >
                <p className="m-0">Amelia</p>
                <p className="m-0">Student</p>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-12 col-lg-6 py-3 mt-3">
          <Card className="bg-white border-0 rounded-4 shadow p-3 pop-testimoni">
            <CardBody>
              <div className="pb-3">
                <span>
                  <i class="fa-solid fa-star text-warning me-2"></i>
                </span>
                <span>
                  <i class="fa-solid fa-star text-warning me-2"></i>
                </span>
                <span>
                  <i class="fa-solid fa-star text-warning me-2"></i>
                </span>
                <span>
                  <i class="fa-solid fa-star text-warning me-2"></i>
                </span>
                <span>
                  <i class="fa-solid fa-star text-warning me-2"></i>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                animi saepe harum ex dolorem eveniet optio vero, deleniti odio
                expedita ea temporibus mollitia culpa quaerat aperiam quis
                excepturi sequi pariatur.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimoniComp;
