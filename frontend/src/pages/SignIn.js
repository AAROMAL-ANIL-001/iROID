import React from "react";
import Header from "../components/Header";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import backGround from "../assets/logs.jpg";

const SignIn = () => {
  return (
    <div
      className="py-3 px-5"
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header page="signin" />

      <Container>
        <div
          className="d-flex align-items-center justify-content-center flex-column"
          style={{ height: 850 }}
        >
          <div>
            <Card
              style={{
                width: 500,
                backgroundColor: "white",
                borderRadius: 10,
                border: "none",
                paddingRight: "5px",
              }}
            >
              <Card.Body>
                <Form style={{ width: 400, padding: 25 }}>
                  <p className="text-center px-3">Welcome Back!</p>

                  <Form.Group className="mb-3 px-3 " controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter address"
                      style={{ width: "380px" }}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 px-3 "
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Choose Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      style={{ width: "380px" }}
                    />
                  </Form.Group>
                  <div className="mb-3 px-4">
                    <div class="mb-3 form-check px-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="px-3">
                    <button
                      className=" btnCls rounded-sm "
                      type="submit"
                      style={{ width: "380px" }}
                    >
                      {" "}
                      Login
                    </button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Row>
              <Col className="py-3 text-center">
                <p className="text-white text-decoration-underline">
                  Forgot your password ?
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
