import React, { useEffect, useState } from 'react';
import mockProducts from './mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Button, Col } from 'reactstrap';

const ETLDashboard = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState("chart");

  const rawData = mockProducts;

  useEffect(() => {
    // simulate fetching cleaned data
    const summary = getAveragePriceByCategory(mockProducts);
    setData(summary);
  }, []);

  const getAveragePriceByCategory = (products) => {
    const grouped = {};

    products.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = { total: 0, count: 0 };
      }
      grouped[product.category].total += product.price;
      grouped[product.category].count += 1;
    });

    return Object.entries(grouped).map(([category, { total, count }]) => ({
      category,
      averagePrice: (total / count).toFixed(2),
    }));
  };

  return (
    <div style={{ marginBottom: "50px", padding: '2rem', backgroundColor: '#1e1e2f', color: 'white', borderRadius: '10px' }}>
      <Col md={12}>
          <h5>📊 ETL Dashboard</h5>
          <p>This feature presents a real-time data visualization dashboard that summarizes product pricing by category. 
            Initially powered by mock data, this dashboard is being updated to dynamically extract data from an external product API, transform the values, and load them into a bar chart using Recharts.</p>
              <p>🔄 Coming Soon: The next iteration will fully automate the ETL pipeline, fetching live data from an API, processing it server-side, and rendering updated insights on the dashboard.</p>
          <h5>🧩 Real-World Application</h5>
              <p>This project models how ETL workflows are used in production systems for data analytics and reporting. It demonstrates the ability to:</p>
                  <p><li className="project-bullets"><b>Extract Data </b>from external APIs using backend services.​</li>
                  <li className="project-bullets"><b>Transform and aggregate </b>raw JSON data into meaningful visual summaries.</li>
                  <li className="project-bullets"><b>Handle asyncrhonous data states, </b>loading indicators, and fallback cases.</li>
              </p>
          <p>Technologies Used:
              <li className="project-bullets">React, Axios, Recharts, Node.js, Express.js, REST APIs (mock now, live integration coming)</li>
          </p>        
      </Col>
      {/* View Toggle Buttons */}
      <div style={{ margin: '1rem 0' }}>
        <Button color={view === "chart" ? "primary" : "secondary"} onClick={() => setView("chart")} className="me-2">Chart</Button>
        <Button color={view === "raw" ? "primary" : "secondary"} onClick={() => setView("raw")} className="me-2">Raw Data</Button>
        <Button color={view === "transformed" ? "primary" : "secondary"} onClick={() => setView("transformed")}>Transformed</Button>
      </div>

      {/* Conditional Views */}
      {view === "chart" && (
        <>
          <h6 style={{ color: 'white' }}>Average Price by Category</h6>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="category" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#333', border: 'none', color: 'white' }} 
                itemStyle={{ color: 'white' }} 
              />
              <Bar dataKey="averagePrice" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}

      {view === "raw" && (
        <div style={{ backgroundColor: '#2a2a40', padding: '1rem', borderRadius: '10px' }}>
          <h6>Raw Product Data (Extracted)</h6>
          <pre style={{ color: 'white', fontSize: '0.8rem', overflowX: 'auto' }}>
            {JSON.stringify(rawData, null, 2)}
          </pre>
        </div>
      )}

      {view === "transformed" && (
        <div style={{ backgroundColor: '#2a2a40', padding: '1rem', borderRadius: '10px' }}>
          <h6>Transformed Data (Loaded for Chart)</h6>
          <pre style={{ color: 'white', fontSize: '0.8rem', overflowX: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ETLDashboard;