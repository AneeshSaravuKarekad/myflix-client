import React, { useState, useEffect } from 'react';
import {
  Container,
  Form,
  InputGroup,
  Row,
  Col,
  FormControl,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './topBar.scss';

const TopBar = ({ query, filters, setFilters }) => {
  const [title, setTitle] = useState(query);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      navigate(`/movies/search/${title}/page/1`);
    } else {
      navigate(`/movies`);
    }
  };
  const sort = (sort) => {
    // console.log(sort);
    setFilters({
      ...filters,
      sort,
    });
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Container>
      <Row className="search-bar-row">
        <Col className="search-col">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <FormControl
                placeholder="Search..."
                aria-label="Search for movies"
                aria-describedby="basic-addon2"
                value={title ?? ''}
                onChange={handleChange}
              />
              <input
                className="btn btn-outline-warning"
                type="submit"
                value="Search"
              />
            </InputGroup>
          </Form>
        </Col>
        <Col className="filter-col">
          <Form className="filter-form">
            <InputGroup className="filter-form__input">
              <Form.Select
                aria-label="Filtering options"
                onChange={(e) => sort(e.target.value)}
                className="filter-form__input-select"
              >
                <option
                  className="filter-form__input-select-option"
                  value="releaseYear"
                >
                  Release Year: Ascending
                </option>

                <option
                  className="filter-form__input-select-option"
                  value="-releaseYear"
                >
                  Release Year: Descending
                </option>
                <option
                  className="filter-form__input-select-option"
                  value="rating"
                >
                  Rating: Ascending
                </option>
                <option
                  className="filter-form__input-select-option"
                  value="-rating"
                >
                  Rating: Descending
                </option>
              </Form.Select>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
