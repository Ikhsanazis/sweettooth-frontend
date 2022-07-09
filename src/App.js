// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="bgleft ">
            <div className="backgroundlayer"></div>
          </Col>
          <Col className="bgright ">
            <h2 class="judul ">Let's Get Started!</h2>
            <p class="text-center">
              Create new account to access all features
            </p>
            <div class="mb-3 col-8 mx-auto ">
              <label for="inputname" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control form-control-lg col-4"
                id="inputEmail"
                placeholder="name"
              ></input>
            </div>
            <div class="mb-3 col-8 mx-auto">
              <label for="inputEmail" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="inputEmail"
                placeholder="name@example.com"
              ></input>
            </div>
            <div class="mb-3 col-8 mx-auto">
              <label for="inputPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="inputPassword"
                placeholder="password"
              ></input>
            </div>
            <div class="mb-3 col-8 mx-auto">
              <label for="phoneNumber" class="form-label">
                Phone Number
              </label>
              <input
                type="phonenumber"
                class="form-control form-control-lg"
                id="phoneNumber"
                placeholder="08xxxxxxx"
              ></input>
            </div>
            <div class="mb-3 col-8 mx-auto">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label class="form-check-label" for="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>
            <div class="mb-3 col-8 mx-auto">
              <button type="button" class="button col-12 btn-lg ">
                Register Account
              </button>
              <p class="forget text-center">
                Already have an account?<a href="#">Login here</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className="bgleft">
            <div className="backgroundlayer"></div>
          </Col>
          <Col className="bgright2 ">
            <h2 class="judul2">Welcome!</h2>
            <p class="text-center">Login into your existing account
            </p>
            <div class="formulir mb-3 col-8 mx-auto ">
              <label for="inputEmail" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="inputEmail"
                placeholder="name@example.com"
              ></input>
            </div>
            <div class="formulir mb-3 col-8 mx-auto ">
              <label for="inputPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="inputPassword"
                placeholder="password"
              ></input>
            </div>
            <div class="formulir mb-3 col-8 mx-auto ">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label class="form-check-label" for="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>
            <div class="formulir mb-3 col-8 mx-auto ">
              <button type="button" class="button col-12 btn-lg ">
                Login
              </button>
              <p class="forget text-center">
                Already have an account?<a href="#">Login here</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="">
          <div class="backlayer1"></div>
          <nav class="navbar  navbar-expand-lg navbar-light bg-transparran">
            <a class="navbar-brand" href="#">
              Home
            </a>
            <a class="navbar-brand" href="#">
              Add Recipe
            </a>
            <a class="navbar-brand" href="#">
              Profile
            </a>
          </nav>
          <div className="search ">
            <Row className="col-8">
              <Col class="col">
                <h1 class="title">
                  Discover Recipe <br />& Delicious Food
                </h1>
                <form class="form">
                  <input
                    class="form-control "
                    type="search"
                    placeholder="Search"
                  />
                  <button class="btn btn-outline-success " type="submit">
                    Search
                  </button>
                </form>
              </Col>
              <Col className="searchimage"></Col>
            </Row>
          </div>
          <div class="backlayer2"></div>
          <div className="titlenew">
            <h2>New Recipe</h2>
          </div>
          <div className="newrecipe ">
            <Row className="col-8">
              <Col className="searchimage"></Col>
              <Col class="col">
                <h1 class="title">
                  Discover Recipe <br />& Delicious Food
                </h1>
                <form class="form">
                  <input
                    class="form-control "
                    type="search"
                    placeholder="Search"
                  />
                  <button class="btn btn-outline-success " type="submit">
                    Search
                  </button>
                </form>
              </Col>
            </Row>
          </div>
          <h2 className="titlepopular">Popular Recipe</h2>
          <div className="popular  ">
            <Row className="mb-5 ">
              <Col className="popularimage mx-3"><p className="text ">COLUMN 1</p></Col>
              <Col className="popularimage mx-3"><p className="text ">COLUMN 1</p></Col>
              <Col className="popularimage mx-3"><p className="text ">COLUMN 1</p></Col>
            </Row>
            <Row className="mb-5">
              <Col className="popularimage mx-3"><p className="text ">COLUMN 1</p></Col>
              <Col className="popularimage mx-3"><p className="text ">COLUMN 1</p></Col>
              <Col className="popularimage mx-3"><p className="text ">COLUMN 1</p></Col>
            </Row>
          </div>
          <div class="backlayer3 ">
            <Row className="mt">
              <h1>Eat, Cook, Repeat</h1>
              <p>Share your best recipe by uploading here !</p>
              <p class="last">
                <a href="#">Product</a> <a href="#">Company</a>{" "}
                <a href="#">Learn More</a> <a href="#">Get in Touch</a>
              </p>
            </Row>
          </div>
        </Row>
      </Container>
      <Container fluid>
        <div class="recipe text-center mt-5">
          <Row>
            <h1>Menu Makanan</h1>
          </Row>
          <Row className="menuimage mx-auto mt-3"></Row>
        </div>
        <div class="ingredients">
          <Row>
            <h1>Ingredients</h1>
            <p>Ingredient</p>
            <p>Ingredient</p>
            <p>Ingredient</p>
            <p>Ingredient</p>
            <p>Ingredient</p>
          </Row>
        </div>
        <div class="videostep">
          <Row>
            <h1>Video Step</h1>
          </Row>
          <Row class="row">
            <Col className="d-grid gap-2 col-2 mb-5">
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
            </Col>
          </Row>
        </div>
        <div class="commentsection col-8 mx-auto">
          <div class="mb-3 col-12 mx-auto bg-primary">
            <textarea
              type="text"
              class="form-control form-control-lg col-4"
              id="inputEmail"
              placeholder="Comment"
              rows="6"
            ></textarea>
          </div>
          <div class="mb-3 col-6 mx-auto ">
            <button type="button" class="btn button col-12 btn-lg ">
              Send
            </button>
          </div>
          <h3>Comment</h3>
        </div>
      </Container>
      <Container fluid>
        <div class="col-8 mx-auto ">
          <textarea
            class="form-control text-center mb-3"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Image"
          ></textarea>
          <input
            type="text"
            class="form-control mb-3"
            id="title"
            placeholder="Title"
          />
          <textarea
            class="form-control mb-3"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Ingredients"
          ></textarea>
          <input
            type="text"
            class="form-control mb-3"
            id="vid"
            placeholder="Video"
          />
          <div class="mb-3 col-6 mx-auto ">
            <button type="button" class="btn button col-12 btn-lg ">
              Send
            </button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="mx-auto">
          <Row className="">
            <div className="photoprofile mx-auto"></div>
            <h3 className="text-center mt-3">Ikhsan Azis</h3>
          </Row>
        </div>
        <div className="savedmenu">
          <Row>
            <p className="link mt-5">
              <a href="#">My Recipe</a>
              <a href="#">Saved Menu</a> <a href="#">Liked</a>
            </p>
          </Row>
        </div>
      </Container>
      <div class="backlayer4">
          <p class="layer4 text-center ">
            <a href="#">Product</a> <a href="#">Company</a>{" "}
            <a href="#">Learn More</a> <a href="#">Get in Touch</a>
          </p>
      </div>
    </div>
  );
}
export default App;
