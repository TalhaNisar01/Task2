import React from 'react';
import DistributorCard from './components/DistributorCard';
import mockData from './mockData';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Augur Dashboard</h1>
      <div className="row">
        {mockData.map((distributor) => (
          <div className="col-md-4 mb-4" key={distributor.name}>
            <DistributorCard distributor={distributor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
