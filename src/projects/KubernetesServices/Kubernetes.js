import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'reactstrap';
import classnames from 'classnames';
import SubHeader from '../../components/SubHeader';
import styles from './Kubernetes.module.css';

const Kubernetes = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error('Users fetch error:', err));
    fetch('http://localhost:8000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error('Products fetch error:', err));
  }, []);

  const fetchUsers = (searchTerm = '') => {
  fetch(`http://localhost:8000/api/users?q=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
    })
    .catch((err) => console.error('Products fetch error:', err));
  };

  const fetchProducts = (searchTerm = '') => {
  fetch(`http://localhost:8000/api/products?q=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => console.error('Products fetch error:', err));
  };

  const handleSearch = () => {
  if (activeTab === 'users') {
    fetchUsers(searchTerm);
  } else if (activeTab === 'products') {
    fetchProducts(searchTerm);
  }
  };

  return (
    <div className='project-container kubernetes-bg'>
      <SubHeader current='Kubernetes Services Demo' dark />
      <Row>
        <Col md={12}>
          <h5>📦 Microservices Architecture Demo</h5>
          <p>This demo shows a FastAPI + Docker Compose setup with separate services for users and products behind a unified gateway.</p>
          <ul className="project-bullets">
            <li><b>Users Service:</b> Responds with static user data (e.g., Alice, Bob)</li>
            <li><b>Products Service:</b> Responds with static product data (e.g., Laptop, Smartphone)</li>
            <li><b>Gateway:</b> Routes traffic from the frontend to the correct service</li>
          </ul>
          <h5>🧩 Real-World Application</h5>
          <ul className="project-bullets">
            <li><b>Microservices:</b> Separate concerns for scalability and modularity</li>
            <li><b>Gateway Pattern:</b> Common in cloud-native app designs</li>
            <li><b>Docker Compose:</b> Running services in isolation locally</li>
          </ul>
        </Col>
      </Row>
        <div className={styles.tabsContainer}>
          <button
            className={classnames(styles.tabButton, {
              [styles.active]: activeTab === 'users',
            })}
            onClick={() => setActiveTab('users')}
          >
            👥 Users
          </button>
          <button
            className={classnames(styles.tabButton, {
              [styles.active]: activeTab === 'products',
            })}
            onClick={() => setActiveTab('products')}
          >
            📦 Products
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
        </div>
        <div className={styles.tabContentWrapper}>
          {activeTab === 'users' && (
            <div className={styles.tabBox}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{ width: '50%' }}>Name</th>
                    <th style={{ width: '50%' }}>Email</th>
                  </tr>
                </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
          )}
          {activeTab === 'products' && (
            <div className={styles.tabBox}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{ width: '50%' }}>Name</th>
                    <th style={{ width: '50%' }}>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr key={i}>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              </div>
            )}
        </div>
    </div>
  );
};

export default Kubernetes;
