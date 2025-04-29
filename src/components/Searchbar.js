import React, { useState } from "react";
import { Button, Container, Col, Row } from 'reactstrap';
import axios from "axios";
import DomainCard from "./DomainCard";
import udCardImg from '../img/ud_image.png'
import udLogo from '../img/ud_logo.png'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const UNSTOPPABLE_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/unstoppable/domains`;

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    axios.get(UNSTOPPABLE_API_ENDPOINT, {
      params: { query: searchQuery }
    })
    .then((response) => {

      const nineResults = response.data.items.slice(0, 9);
      
      const results = nineResults.map((item) => ({
        name: item.name,
        price: item.price?.subTotal?.usdCents
          ? Math.round(item.price.subTotal.usdCents / 100)
          : item.price?.listPrice?.usdCents
            ? Math.round(item.price.listPrice.usdCents / 100)
            : "N/A"
      }));

      setSearchResults(results);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
    <div style={{borderRadius: '25px', marginBottom: "50px"}} className='web3-container'>
      <Row style={{paddingLeft: '15px'}}> 
        <Col className="project-header" md={12} style={{padding: '20px 25px 5px 15px'}}>
          <h5>🌐 Unstoppable Domains Integration & Stripe Payment Flow</h5>
          <p>This feature enables users to search for available Web3 domains directly through my portfolio site, leveraging the Unstoppable Domains Partner API. 
             I've also integrated Stripe's Payment API as part of this project, allowing users to simulate the purchase of a domain. 
             This demonstrates my ability to integrate third-party APIs and manage backend services securely. Mock payment processing using Stripe's test mode and test card numbers e.g., 4242 4242 4242 4242</p>
          <h5>🧩 Real-World Application: Partner Integration Engineer at Unstoppable Domains</h5>
          <p>Overview</p>
          <p>In my role as a Partner Integration Engineer at Unstoppable Domains, I was responsible for guiding Web3 decentralized applications (dApps) through the integration of our Partner API. 
            This involved providing technical consultation, advising on user experience design, and ensuring seamless implementation of domain search and registration functionalities.</p>
          <p>Key Responsibilities
            <li className="project-bullets">API Consultation: Advised partners on effectively utilizing the Unstoppable Domains Partner API for domain lookup, registration, and management.​</li>
            <li className="project-bullets">UI/UX Guidance: Collaborated with partner teams to design intuitive user interfaces that align with both Unstoppable Domains' branding and the partner's application flow.</li>
            <li className="project-bullets">Technical Support: Assisted in troubleshooting integration issues, ensuring a smooth and efficient implementation process.</li>
          </p>
          <p>Technologies Used:
            <li className="project-bullets">React, Node.js, Express.js, Axios</li>
            <li className="project-bullets">Untoppable Domains Partner API, Stripe's Payment API</li>
          </p>        
        </Col>
      </Row>
      <Row md={4} className="justify-content-center" style={{ marginTop: '20px'}}>
        <Col  md={10} xs='auto' className='mx-auto text-center' style={{backgroundColor: 'black', color: 'white', paddingTop: '10px', borderRadius: '5px 5px 0 0'}}>
          <h5><b>Search for a Web3 domain by Unstoppable Domains</b> <img className='ud-logo-indesc' src={udLogo}/></h5>
        </Col>
        <Col md={10} xs='auto' className="text-center" style={{backgroundColor: 'black', paddingBottom: '10px', borderRadius: '0 0 5px 5px'}}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="custom-search-bar" 
            style={{ textAlign: 'center'}}
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
      <div className="mx-0 px-0" style={{ backgroundColor: 'black', marginTop: '30px', borderRadius: '0 0 25px 25px'}}>
        <Row className="justify-content-center g-0">
          {searchResults.map((domain, index) => (
            <Col md={3} className="m-4 text-center" key={index}>
              <DomainCard domain={domain} udImg={udCardImg} searchQuery={domain.name} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </>
  );
}

export default SearchBar;
