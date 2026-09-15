# Tawny's Portfolio Website

Welcome! This is my technical portfolio showcasing projects focused on integration architecture, API implementations, backend development, data transformation, and client-facing technical solutions.

The portfolio combines React frontends with Python/FastAPI and Node.js backends to demonstrate how business requirements can be translated into working integration solutions.

🌐 **Live Portfolio:** https://tawny-mathi.com

---

## 🚀 About the Portfolio

This portfolio began as a full-stack development project and has evolved into a collection of integration-focused applications and technical demonstrations.

The projects emphasize:

- API integration and REST architecture
- Client implementation and solution design
- Python and FastAPI backend development
- Data validation and transformation
- PostgreSQL persistence and SQLAlchemy ORM
- System integration patterns
- Error handling and retry strategies
- Observability and integration monitoring
- Responsive React interfaces
- Cloud deployment

---

## 🔌 Featured Projects

### 👥 Client Employee Transfer Tool

A client-focused employee migration application that simulates transferring employee data from Workstream to Toast.

The integration:

- Processes active employee records
- Validates required employee data
- Prevents duplicate employee creation using employee ID and email
- Translates source locations and positions using customer-configured mappings
- Records transferred, skipped, and failed migration results
- Persists migration runs and results in PostgreSQL
- Provides historical migration visibility
- Generates downloadable migration reports

The project demonstrates the complete implementation lifecycle from business requirements and mapping configuration through validation, transformation, persistence, reporting, and deployment.

**Technologies:** React, Python, FastAPI, PostgreSQL, SQLAlchemy, REST APIs

---

### 🔷 Workday Integration Platform

A simulated enterprise integration platform demonstrating how Workday worker events can be normalized and delivered to downstream business systems.

The platform demonstrates:

- Worker event processing
- Canonical worker data transformation
- Payroll and Learning system integrations
- Department and learning-role mappings
- Retry handling for failed deliveries
- Integration logging
- Delivery status and latency tracking
- Integration health summaries and observability

The architecture is designed to demonstrate reliable, observable, and extensible enterprise integration patterns.

**Technologies:** React, Python, FastAPI, REST APIs

---

### 💳 Lender API Integration

An integration demonstration focused on retrieving, transforming, and synchronizing lending data between systems.

The project demonstrates API-driven workflows, data transformation, and integration patterns similar to those used when connecting lenders and internal loan-origination systems.

**Technologies:** React, APIs, OAuth, JSON, backend services

---

### 📊 ETL Dashboard

A data transformation and visualization application backed by FastAPI.

The application:

- Retrieves product data from external APIs
- Cleans and transforms API responses
- Calculates aggregated product metrics
- Presents transformed data through an interactive dashboard

The project demonstrates the Extract → Transform → Load pattern and Python-based API processing.

**Technologies:** React, Python, FastAPI, REST APIs, data transformation

---

## 🏗 Integration Architecture

Several projects in this portfolio follow the same real-world integration lifecycle:

**Source System → API → Validation → Transformation / Mapping → Destination System → Persistence → Reporting / Observability**

This approach demonstrates not only API connectivity, but the business and technical considerations required to operate integrations reliably.

These include:

- Required-field validation
- Source-to-destination data mapping
- Duplicate protection
- Error classification
- Retry strategies
- Persistent integration history
- Operational reporting
- Integration monitoring

---

## 🛠 Technologies

**Frontend**

- React
- React Router
- Reactstrap
- Bootstrap
- Framer Motion
- JavaScript
- HTML / CSS

**Backend**

- Python
- FastAPI
- Node.js
- Express.js
- SQLAlchemy

**Data**

- PostgreSQL
- SQL
- JSON
- Data transformation and mapping

**Integration**

- REST APIs
- OAuth
- Webhooks
- API validation
- Error handling
- Retry patterns
- Postman

**Deployment**

- Bluehost — React portfolio
- Render — backend APIs and PostgreSQL

---

## 🗺 Current Focus

The portfolio continues to evolve around production-oriented integration patterns.

Current and future enhancements include:

- CSV-driven employee migration
- Automated employee synchronization
- Selective retry of failed migration records
- Additional integration observability
- Authentication and authorization
- Rate limiting and API throttling
- Expanded database-backed configuration
- Additional source and destination systems

---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode on [http://localhost:3000](http://localhost:3000).  
Watches for changes and reloads automatically.

### `npm run build`
Builds the app for production into the `build/` folder.  
Optimizes assets for performance with hashed filenames.

For deployment guidance, see [this guide](https://facebook.github.io/create-react-app/docs/deployment).

---

## 📫 Contact

Email me at: **tawnymslc@gmail.com**  
Explore more at: [tawny-mathi.com](https://tawny-mathi.com)
