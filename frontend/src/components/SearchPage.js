import React, { useState } from "react";

//React bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const SearchPage = () => {
  const filters = [
    {
      id: 1,
      filter: "balanced",
    },
    {
      id: 2,
      filter: "high protein",
    },
    {
      id: 3,
      filter: "low-fat",
    },
    {
      id: 4,
      filter: "low-carb",
    },
    {
      id: 5,
      filter: "vegan",
    },
    {
      id: 6,
      filter: "vegetarian",
    },
    {
      id: 7,
      filter: "sugar-conscious",
    },
    {
      id: 8,
      filter: "peanut-free",
    },
    {
      id: 9,
      filter: "tree-nut-free",
    },
    {
      id: 10,
      filter: "alcohol-free",
    },
  ];
  const [searchWord, setSearchWord] = useState([]);
  const [minCal, setMinCal] = useState(0);
  const [maxCal, setMaxCal] = useState(0);

  const updateSearchWord = (e) => {
    setSearchWord(e.target.value);
  };

  const updateMinCal = (e) => {
    setMinCal(e.target.value);
  };

  const updateMaxCal = (e) => {
    setMaxCal(e.target.value);
  };

  const searchButtonClick = (e) => {
    e.preventDefault();

    var objectToSend = {
      searchWord: searchWord,
      minCal: minCal,
      maxCal: maxCal,
      // Checkbox filters are not done yet
      // filters: filtersWhichAreChecked
    };

    console.log(objectToSend);
  };

  const filterList = filters.map((filter) => {
    return (
      <Form.Check
        style={{ minWidth: "135px" }}
        inline
        label={filter.filter}
        name={filter.filter}
        id={filter.id}
        //onClick={changeValue}
        //value={filter.value}
      />
    );
  });

  return (
    <div>
      <Container>
        <Col md={{ span: 8, offset: 2 }}>
          <h2
            style={{
              "text-align": "center",
              padding: "20px",
              color: "green",
            }}
          >
            Search for recipes
          </h2>

          <Form>
            <Form.Group onSubmit={searchButtonClick}>
              <Form.Control
                type="text"
                placeholder="Enter search word"
                value={searchWord}
                onChange={updateSearchWord}
              />

              <Row style={{ paddingTop: "25px", paddingBottom: "25px" }}>
                <Col sm={3} style={{ paddingTop: "25px" }}>
                  Calories
                </Col>
                <Col sm={2}>
                  <Form.Label>Min</Form.Label>
                  <Form.Control
                    size="sm"
                    type="number"
                    style={{ maxWidth: "100px" }}
                    value={minCal}
                    onChange={updateMinCal}
                  />
                </Col>
                <Col sm={2}>
                  <Form.Label>Max</Form.Label>
                  <Form.Control
                    size="sm"
                    type="number"
                    style={{ maxWidth: "100px" }}
                    value={maxCal}
                    onChange={updateMaxCal}
                  />
                </Col>
              </Row>

              <Row style={{ paddingBottom: "25px" }}>
                <Col sm={3}>Filters</Col>
                <Col sm={9}>{filterList}</Col>
              </Row>

              <Button
                type="submit"
                variant="success"
                onClick={searchButtonClick}
              >
                Search
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default SearchPage;
