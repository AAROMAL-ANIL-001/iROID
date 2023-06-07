import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import backgroundImage from "../assets/home.jpg";

const Home = () => {
  const filename = [
    "iroid1.png",
    "iroid2.png",
    "iroid3.png",
    "iroid4.png",
    "iroid5.png",
    "iroid6.png",
    "iroid7.png",
    "iroid8.png",
  ];

  return (
    <div
      className="py-3 px-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <header>
        <Navbar bg="transparent" expand="lg">
          <Nav className="ms-auto">
            <LinkContainer to="" className="">
              <Nav.Link className="flex">
                <span>Hi, Aaromal </span>
                <button className="btnCls py-1 rounded-sm">Logout</button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </header>

      <main>
        <Container>
          <div className="d-flex justify-content-center align-items-center flex-column w-100 mt-5">
            <div className="mt-5">
              <h4>Name your Organization</h4>
            </div>
            <div className="py-3">
              <input
                style={{ width: 400, padding: 5, textAlign: "center" }}
                className="rounded"
                placeholder="Enter organization name"
              />
            </div>
            <div className="py-3">
              <h4>Select your Organization Type below</h4>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              backgroundColor: "transparent",

              height: "350px",
              overflowY: "auto",
            }}
          >
            <Row xs={1} md={2} lg={4} className="py-3">
              {filename.map((file, index) => (
                <Col key={index}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={require(`../assets/${file}`)}
                      alt="pic"
                      width={200}
                      className="rounded p-2 img-fluid"
                      style={{
                        border: "none",
                        borderRadius: 5,
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <button className="btnCls py-1 rounded-sm">Next</button>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Home;
