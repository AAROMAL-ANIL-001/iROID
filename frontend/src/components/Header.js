import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = ({ page }) => {
  return (
    <header>
      <Navbar bg="transparent" expand="lg">
        <Nav className="ms-auto">
          <LinkContainer
            to={page === "signin" ? "/signup" : "/login"}
            className=""
          >
            <Nav.Link className="flex">
              {page === "signin" ? (
                <div>
                  <span className="mr-5">
                    Don't have an account ? {"     "}
                  </span>

                  <button className="btnCls py-1 rounded-sm">Sign Up</button>
                </div>
              ) : page === "signup" ? (
                <div>
                  <span className="mr-5">
                    Already have an account ? {"     "}
                  </span>

                  <button className="btnCls py-1 rounded-sm">Login</button>
                </div>
              ) : (
                ""
              )}
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
