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

const TopBar = ({ query }) => {
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
        <Col>
          <h2>Pagination</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
