import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Button, Col } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import axios from "axios";

const ETLDashboard = () => {
  const [data, setData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [view, setView] = useState("chart");

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
  const fetchData = async () => {
    try {
      const rawResponse = await axios.get(`${process.env.REACT_APP_PYTHON_API_URL}/products/raw`);
      setRawData(rawResponse.data);

      const summaryResponse = await axios.get(`${process.env.REACT_APP_PYTHON_API_URL}/products/average-prices`);
      setData(summaryResponse.data);

    } catch (error) {
      console.error("Error fetching ETL data:", error);
    }
  };

    fetchData();
  }, []);

  const filteredData = data.filter(item => item.averagePrice <= 1000);

  return (
    <div style={{ marginBottom: "50px", padding: '2rem', backgroundColor: '#1e1e2f', color: 'white', borderRadius: '10px' }}>
      <Col md={12}>
          <h5>📊 ETL Dashboard</h5>
            <p>This feature presents a real-time data visualization dashboard that summarizes product pricing by category. 
              Originally powered by mock data, it now extracts live data from the external API at <code>dummyjson.com/products</code>. 
              The backend service processes this raw product data by grouping it by category and calculating the average price for each category.
            </p>
            <p>The cleaned and aggregated data is then sent to the frontend, where it is visually rendered using Recharts for easy insight.</p>
          <h5>🧩 Real-World Application</h5>
            <p>This project models how ETL workflows are used in production systems for data analytics and reporting. It demonstrates the ability to:</p>
              <ul>
                <li className="project-bullets"><b>Extract Data</b> from external APIs using a Python backend (FastAPI).</li>
                <li className="project-bullets"><b>Transform and aggregate</b> raw JSON product data by computing category-level averages.</li>
                <li className="project-bullets"><b>Load and visualize</b> the results through a responsive frontend dashboard using Recharts.</li>
                <li className="project-bullets"><b>Handle asynchronous states</b>, including data loading, display toggles, and fallback messaging.</li>
              </ul>
              <p><b>Technologies Used:</b></p>
              <ul>
                <li className="project-bullets">React, Axios, Recharts</li>
                <li className="project-bullets">Python, FastAPI, REST APIs</li>
              </ul>     
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
          <h6 style={{ color: 'white' }}>Average Price of Products by Category</h6>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart 
              data={filteredData}
              layout={isMobile ? "vertical" : "horizontal"}
               margin={{ top: 20, right: 20, bottom: 60, left: 30 }}
            >
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            
                {isMobile ? (
                    <>
                      <XAxis type="number" stroke="#aaa" />
                      <YAxis 
                        type="category" 
                        dataKey="category" 
                        stroke="#aaa" 
                        width={120} 
                      />
                    </>
                  ) : (
                    <>
                      <XAxis 
                        dataKey="category" 
                        stroke="#aaa" tick={{ angle: -30, textAnchor: 'end' }} 
                        interval={0} />
                      <YAxis stroke="#aaa" />
                    </>
                )}

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
          <p>Displaying 10 sample products (from a total of 100 returned by the API @ dummyjson.com/products)</p>
          <pre style={{ color: 'white', fontSize: '0.8rem', overflowX: 'auto' }}>
            {JSON.stringify(rawData.slice(0, 10), null, 2)}
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