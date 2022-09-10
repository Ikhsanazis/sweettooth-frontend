import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import { useState } from "react";

function Collection() {
  const [key, setKey] = useState("first");

  return (
    <>
            <Tab.Container
              defaultActiveKey="first"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              
            >
              <Nav variant="" className="nav" align="left" style={{cursor:"pointer"}}>
                <Nav.Item >
                  <Nav.Link className="tabs" eventKey="first">
                    Ingredients
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tabs" eventKey="second">
                    video
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tabs" eventKey="three">
                    video
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div>test</div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>test 2</div>
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <div>test 3</div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
    </>
  );
}

export default Collection;
