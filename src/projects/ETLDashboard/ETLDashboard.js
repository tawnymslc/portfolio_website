import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Button} from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import styles from './ETLDashboard.module.css'
import SubHeader from '../../components/SubHeader'
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

  const formatCategory = (category) => {
    return category
      .split("-")
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )

      .join(" ")
  }

  const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null

    const row = payload[0].payload

    return (
      <div
        style={{
          backgroundColor: '#333',
          color: 'white',
          padding: isMobile ? '6px 8px' : '12px',
          borderRadius: '6px',
          fontSize: isMobile ? '12px' : '14px',
          lineHeight: 1.2,
          maxWidth: isMobile ? '160px' : '250px'
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          {formatCategory(label)}
        </p>
        <p style={{ margin: 0 }}>
          Avg: ${row.averagePrice}
        </p>
        <p style={{ margin: 0 }}>
          Count: {row.count}
        </p>
        <p style={{ margin: 0 }}>
          Min: ${row.minPrice}
        </p>
      </div>
    )
  }

  return (
    <div className={styles.etlContainer}>
      <SubHeader current='ETL Dashboard' dark hideTitle />
        <section>
          <div className={styles.etlPanel}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>
                    Data Pipeline Demo
                </span>
                <h2 className={styles.heading}>
                     Product Data ETL Pipeline
                </h2>
                <p className={styles.subtext}>
                    <strong>Portfolio demonstration:</strong> Extracts live product data from an external API, 
                            transforms raw product records into category-level pricing metrics, and presents 
                            the processed results in an interactive dashboard.
                </p>
              </div>
              <div className={styles.architectureSection}>
                  <h2 className={styles.architectureHeading}>
                      Pipeline Overview
                  </h2>
                  <p className={styles.architectureText}>
                      Product records are extracted from an external API, cleaned and grouped by category in the Python backend, 
                      then delivered to the React frontend for visualization.
                  </p>
                  <div className={styles.architectureDiagram}>
                      <div className={styles.architectureBox}>
                          <strong>External Product API </strong>
                          <span className={styles.boxSubtext}>RAW JSON Records</span>
                      </div>
                      <div className={styles.arrow}>↓</div>
                      <div className={styles.architectureBox}>
                          <strong>Extract</strong>
                          <span className={styles.boxSubtext}>Fetch Product Data</span>
                      </div>
                      <div className={styles.arrow}>↓</div>
                      <div className={styles.architectureBox}>
                          <strong>Transform</strong>
                          <span className={styles.boxSubtext}>Group By Category</span>
                          <span className={styles.boxSubtext}>Calculate by Average</span>
                      </div>
                      <div className={styles.arrow}>↓</div>
                      <div className={styles.architectureBox}>
                          <strong>FastAPI Response</strong>
                          <span className={styles.boxSubtext}>Processed Dataset</span>
                      </div>
                      <div className={styles.arrow}>↓</div>
                      <div className={styles.architectureBox}>
                          <strong>React/Recharts</strong>
                          <span className={styles.boxSubtext}>Visualization</span>
                      </div>
                  </div>
                </div>  
                {/* View Toggle Buttons */}
                <div className={styles.viewToggle}>
                  <Button color={view === "chart" ? "primary" : "secondary"} onClick={() => setView("chart")} className="me-2">Visualization</Button>
                  <Button color={view === "raw" ? "primary" : "secondary"} onClick={() => setView("raw")} className="me-2">Raw Data</Button>
                  <Button color={view === "transformed" ? "primary" : "secondary"} onClick={() => setView("transformed")}>Transformed Data</Button>
                </div>
                {/* Conditional Views */}
                {view === "chart" && (
                  <>
                    <h6 className={styles.chartHeading}>Average Price of Products by Category</h6>
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
                          content={isMobile ? <CustomTooltip /> : undefined}
                          formatter={!isMobile ? (value, name, props) => {
                            const row = props?.payload
                            if (name === "averagePrice" && row) {
                              return [`$${value} | Min: $${row.minPrice}`, "Average Price"]
                            }
                            return [value, name]
                          } : undefined}
                          contentStyle={{ backgroundColor: '#333', border: 'none', color: 'white' }}
                          itemStyle={{ color: 'white' }}
                        />
                        <Bar dataKey="averagePrice" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </>
                )}
                {view === "raw" && (
                  <div className={styles.dataPanel}>
                    <h6>Raw Product Data (Extracted)</h6>
                    <p>Displaying 10 sample products</p>
                    <pre className={styles.jsonData}>
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
      </section>
    </div>
  );
};

export default ETLDashboard;