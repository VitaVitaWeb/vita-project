import TopBar from "../../CommonComponent/TopBar/topBar";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SurveyResult.css";
import ReactPaginate from "react-paginate";

function SurveyResult() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axios
      .get("/personrecommend", { params: { id: userId } })
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <TopBar></TopBar>
      <h2 className="text-center mt-3 mb-3">
        설문조사에 맞는 영양제 추천입니다!
      </h2>
      <Container>
        <Row className="justify-content-md-center">
          {paginatedItems.map((item, index) => (
            <Col md="4" className={index % 3 === 2 ? "mb-4" : "mb-4 pr-4"}>
              <Card className="shadow-sm p-2 bg-white rounded h-100">
                <img
                  className="bd-placeholder-img card-img-top"
                  src={item.img_path}
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/InfoPage/${item.vno}`}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      성분 보기
                    </Link>
                    <div className="btn-group">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        구매하러가기
                      </a>
                    </div>
                    <small className="text-muted">{item.category4}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <ReactPaginate
          previousLabel={"«"}
          nextLabel={"»"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected: selectedPage }) =>
            setCurrentPage(selectedPage)
          }
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </Container>
    </>
  );
}

export default SurveyResult;
