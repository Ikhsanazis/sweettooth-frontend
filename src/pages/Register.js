import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormHeader from "../components/atoms/FormHeader";
import FormLoginexample from "../components/organism/FormRegister";

function Loginexample() {
  return (
    <Container fluid className="h-100">
      <Row>
        <Col className="bgleft">
          <div className="backgroundlayer"></div>
        </Col>
        <Col className="bgright2  d-flex flex-column ">
          <div className="row rightside">
            <FormHeader
              title={"Welcome ! "}
              desc={"Login into your existing account"}
            />
            <FormLoginexample />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Loginexample;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import FormHeader from "../components/atoms/FormHeader";
// import FormRegister from "../components/organism/FormRegister2";

// function App() {
//   return (
//     <div className="App">
//       <Container fluid>
//         <Row>
//           <Col className="bgleft ">
//             <div className="backgroundlayer"></div>
//           </Col>
//           <Col className="bgright ">
//             <FormHeader title={"Let's Get Started "} desc={"Create new account to access all features"}/>
//             <FormRegister/>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;
