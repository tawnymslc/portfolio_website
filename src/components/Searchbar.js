import React, { useState } from "react";
import { Button, Container, Col, Row } from 'reactstrap';
import axios from "axios";
import DomainCard from "./DomainCard";
import udCardImg from '../img/ud_image.png'
import udLogo from '../img/ud_logo.png'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const API_ENDPOINT = "https://api.ud-sandbox.com/api/v2/resellers/tawnyapp/domains/suggestions?";

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    axios.get(API_ENDPOINT, { params: { search: searchQuery }})
      .then((response) => {
        const maxResults = 9;

        const nineResults = response.data.slice(0, maxResults);
        setSearchResults(nineResults);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    <Container style={{borderRadius: '25px', marginBottom: "50px"}} className='web3-container container-fluid'>
      <Row> 
        <Col className='text-center'>
          <h2>Unstoppable Domain/Stripe API Integration</h2>
          <h5>Search for a Web3 domain by Unstoppable Domains <img className='ud-logo-indesc' src={udLogo}/></h5>
        </Col>
      </Row>
      <Row md={11} className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col xs='auto' className="text-center">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="custom-search-bar" 
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button 
            type='submit' 
            style={{ backgroundColor: 'rgb(77, 72, 242)', marginBottom: '4px', color: 'white', lineHeight: "16px", display: 'inline-block', textAlign: 'center', fontWeight: 'bold' }}>
              Search
          </Button>
        </form>
        </Col>
      </Row>
      <Container style={{ marginTop: '30px' }}>
        <Row className="justify-content-center">
          {searchResults.map((domain, index) => (
            <Col md={3} className="m-4 text-center" key={index}>
              <DomainCard domain={domain} udImg={udCardImg} searchQuery={domain.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  </>
  );
}

export default SearchBar;
