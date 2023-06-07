import React from "react";
import { Container, Form, Card } from "react-bootstrap";
import Header from "../components/Header";
import backGround from "../assets/logs.jpg";

const SignUp = () => {
  const onFinish = (values) => {
    console.log(values);
  };
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
      <Header page="signup" />

      <Container>
        <div
          className="d-flex align-items-center justify-content-center "
          style={{ height: 850 }}
        >
          <Card
            style={{
              width: 500,
              backgroundColor: "white",
              borderRadius: 10,
              border: "none",
            }}
          >
            <Card.Body>
              <Form style={{ width: 400, padding: 25 }} onSubmit={onFinish}>
                <p className="text-center px-3">Let's go!</p>
                <Form.Group className="mb-3 px-3" controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ width: "380px" }}
                    name="name"
                  />
                </Form.Group>
                <Form.Group className="mb-3 px-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    style={{ width: "380px" }}
                    name="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3 px-3" controlId="formBasicPassword">
                  <Form.Label>Choose Password</Form.Label>
                  <Form.Control
                    type="password"
                    style={{ width: "380px" }}
                    name="password"
                  />
                </Form.Group>
                <div className="px-3">
                  <button
                    className=" btnCls rounded-sm"
                    type="submit"
                    style={{ width: "380px" }}
                  >
                    Sign up
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
