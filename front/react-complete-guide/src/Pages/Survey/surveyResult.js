import TopBar from "../../CommonComponent/TopBar/topBar";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./component/surveyBackground.css";

function SurveyResult() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/personrecommend")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <TopBar />
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {items.map((item) => (
          <Col key={item.vno}>
            <Card className="shadow-sm p-2 mb-2 bg-white rounded">
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
    </>
  );
}

export default SurveyResult;
