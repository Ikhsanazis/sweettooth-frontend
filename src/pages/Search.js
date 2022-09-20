import React from "react";
import { Container, Row, Col, Card, Tab, Nav } from "react-bootstrap";
import UserProfile from "../components/molecules/UserProfile";
import Footer2 from "../components/molecules/Footer2";
import HomeNavbar from "../components/molecules/HomeNavbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Searchbar from "../components/atoms/searchbar";
import { AiFillStar } from "react-icons/ai";
import ReactPaginate from "react-paginate";

function App() {
  //   const router = useRouter();
  //   const { keyword } = router.query;
  const [filter, setFilter] = useState("DESC");
  const [resultSearch, setResultSearch] = useState([]);
  const [loadResult, setLoadResult] = useState(true);
  const { keyword } = useParams();
  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    setLoadResult(true);
    axios
      .get(
        `https://sweettooth-app.herokuapp.com/recipe/search?keyword=${keyword}&filter=${filter}`
      )
      .then((res) => {
        setResultSearch(res?.data?.data);
        setLoadResult(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyword, filter]);

  function handleSort(e) {
    setFilter(e.target.value);
  }
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(resultSearch.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(resultSearch.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, resultSearch]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % resultSearch.length;
    setItemOffset(newOffset);
  };
  console.log(resultSearch);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HomeNavbar />
        </Row>
        <div className="col-lg-10 mx-auto" style={{ marginTop: "80px" }}>
          <Searchbar />
          <div className="d-flex justify-content-end mb-2">
            <label>Sort By : </label>
            <select
              defaultValue={filter}
              onChange={handleSort}
              className="Default select example mx-1 border-0"
            >
              <option defaultValue value="DESC">
                Newest
              </option>
              <option value="ASC">Latest</option>
            </select>
          </div>
          <div className="row">
            <div className="col ">
              <div className="">
                {currentItems.length > 0 ? (
                  <>
                    <Row xs={1} md={4} className="g-4 mb-5">
                      {currentItems?.map((item) => (
                        <Col key={item?.recipe_id}>
                          <Link to={`/DetailRecipe/${item.recipe_id}`}>
                            <Card>
                              <Card.Img
                                crossOrigin="anonymous"
                                variant="top"
                                src={`https://sweettooth-app.herokuapp.com/images/${item?.image}`}
                                // width="100px"
                                height={300}
                              />
                              <Card.ImgOverlay className="d-flex align-items-end">
                                <Card.Title>{item?.name}</Card.Title>
                              </Card.ImgOverlay>
                            </Card>
                          </Link>
                        </Col>
                      ))}
                    </Row>
                    {currentItems.length > 8 ? (
                      <section className="  d-flex justify-content-center text-center">
                        <ReactPaginate
                          // className="pagination"
                          breakLabel=""
                          nextLabel="Next"
                          previousLabel="Prev"
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={5}
                          pageCount={pageCount}
                          renderOnZeroPageCount={null}
                          containerClassName="pagination"
                          pageLinkClassName="pagelink"
                          previousLinkClassName="pagelink"
                          nextLinkClassName="pagelink"
                          activeLinkClassName="activepage"
                        />
                      </section>
                    ) : null}
                  </>
                ) : (
                  <>
                    <div className="text-center col-lg-8 mx-auto bg-light">
                      <p>There is no match result</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </Container>
    </div>
  );
}

export default App;
