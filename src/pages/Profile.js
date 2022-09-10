import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import UserProfile from "../components/molecules/UserProfile";
import Footer2 from "../components/molecules/Footer2";
import Collection from "../components/molecules/Collection";
import HomeNavbar from "../components/molecules/HomeNavbar";
import { useState } from "react";
function App() {
  const [key, setKey] = useState("home");
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HomeNavbar />
        </Row>
        <Row>
          <div className="userprofile ">
            <UserProfile />
          </div>
        </Row>
        <Row className="mb-5">
          <div class="collection">
            <Collection />
            {/* <Tab.Container
              defaultActiveKey="first"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Nav variant="" className="nav" align="left">
                <Nav.Item>
                  <Nav.Link className="{style.tabs}" eventKey="first">
                    Ingredients
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="{style.tabs}" eventKey="second">
                    video
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="{style.tabs}" eventKey="three">
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
            </Tab.Container> */}
          </div>
        </Row>
        <Row>
          <Footer2 />
        </Row>
      </Container>
    </div>
  );
}

export default App;
