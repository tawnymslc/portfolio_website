import React, { useEffect, useState } from 'react';
import mockProducts from './mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const ETLDashboard = () => {
  const [data, setData] = useState([]);

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
    <div style={{ padding: '2rem' }}>
      <h2>ETL Dashboard: Average Price by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="averagePrice" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ETLDashboard;