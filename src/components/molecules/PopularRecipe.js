import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function NewRecipe(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  console.log(data);
  return (
    <>
      <Row xs={1} md={3} className="g-4 mb-5">
        {currentItems?.map((item) => (
          <Col key={item?.recipe_id}>
            <Link to={`/DetailRecipe/${item.recipe_id}`}>
              <Card>
                <Card.Img
                  crossOrigin="anonymous"
                  variant="top"
                  src={`https://sweettooth-app.herokuapp.com/images/${item?.image}`}
                  height={300}
                />
                <Card.ImgOverlay className="d-flex align-items-end">
                  <Card.Title
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      marginLeft: "-5px",
                      color: "#fff",
                      textShadow: "1px -1px 7px rgba(0,0,0,1)",
                    }}
                  >
                    {item?.name}
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <section className="  d-flex justify-content-center text-center">
        <ReactPaginate
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
    </>
  );
}

export default NewRecipe;
