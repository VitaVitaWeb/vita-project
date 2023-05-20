import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function SupplementList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 이곳에서 백엔드에서 데이터를 받아오는 작업을 수행한다.
    //
    axios
      .get("/vita/list")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.map((item, i) => (
        <div className="col" key={item.vno}>
          <div className="card shadow-sm p-4 mb-4 bg-white rounded">
            {" "}
            {/* Padding and margin classes adjusted here */}
            <img
              className="bd-placeholder-img card-img-top"
              src={item.img_path}
              alt={item.name}
            />
            <div className="card-body">
              <p className="card-text">{item.name}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </a>
                </div>
                <small className="text-muted">{item.category4}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SupplementList;
