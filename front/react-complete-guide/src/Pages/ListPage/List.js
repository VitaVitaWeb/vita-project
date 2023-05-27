import React, { useEffect, useState } from "react";
import TopBar from "../../CommonComponent/TopBar/topBar";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import "./List.css";
import { Link } from "react-router-dom";

function SupplementList() {
  const [items, setItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가
  useEffect(() => {
    axios
      .get("/vita/list")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0 && searchTerm === "") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(
        (item) =>
          (selectedCategories.includes(item.category4) ||
            selectedCategories.length === 0) &&
          (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            searchTerm === "")
      );
      setFilteredItems(filtered);
    }
  }, [selectedCategories, items, searchTerm]); // searchTerm 의존성 추가

  const handleCategoryChange = (category) => {
    const index = selectedCategories.indexOf(category);
    if (index > -1) {
      const updatedCategories = [...selectedCategories];
      updatedCategories.splice(index, 1);
      setSelectedCategories(updatedCategories);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <>
      <TopBar />
      <Container>
        <Row className="justify-content-center mb-3 gap-4">
          <Col xs="auto">
            <Form.Group controlId="searchGroup">
              <Form.Label>영양제 검색</Form.Label>
              <Form.Control
                type="text"
                placeholder="영양제 검색하기"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group controlId="categoryGroup">
              <Form.Label>카테고리 선택</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="category1"
                    label="멀티비타민"
                    checked={selectedCategories.includes("멀티비타민")}
                    onChange={() => handleCategoryChange("멀티비타민")}
                    className="checkbox-item"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="category2"
                    label="프로바이오틱스"
                    checked={selectedCategories.includes("프로바이오틱스")}
                    onChange={() => handleCategoryChange("프로바이오틱스")}
                    className="checkbox-item"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="category3"
                    label="오메가3"
                    checked={selectedCategories.includes("오메가3")}
                    onChange={() => handleCategoryChange("오메가3")}
                    className="checkbox-item"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="category4"
                    label="칼슘"
                    checked={selectedCategories.includes("칼슘")}
                    onChange={() => handleCategoryChange("칼슘")}
                    className="checkbox-item"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="category5"
                    label="MSM"
                    checked={selectedCategories.includes("MSM")}
                    onChange={() => handleCategoryChange("MSM")}
                    className="checkbox-item"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="category6"
                    label="콜라겐"
                    checked={selectedCategories.includes("콜라겐")}
                    onChange={() => handleCategoryChange("콜라겐")}
                    className="checkbox-item"
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    id="category5"
                    label="기타"
                    checked={selectedCategories.includes("기타건강보조식품")}
                    onChange={() => handleCategoryChange("기타건강보조식품")}
                    className="checkbox-item"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {filteredItems.map((item) => (
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
      </Container>
    </>
  );
}

export default SupplementList;
