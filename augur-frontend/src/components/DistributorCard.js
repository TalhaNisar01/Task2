import React from 'react';
import Card from 'react-bootstrap/Card';

const DistributorCard = ({ distributor }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{distributor.name}</Card.Title>
        <Card.Text>
          <strong>Last Month's Shipment:</strong> {distributor.lastMonth} units
        </Card.Text>
        <Card.Text>
          <strong>Forecast for This Month:</strong> {distributor.forecast} units
        </Card.Text>
        <Card.Text>
          <strong>Year-to-Date Average:</strong> {distributor.ytdAverage} units/month
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DistributorCard;
