import React from 'react';
import { Card } from 'react-bootstrap';

const Map = () => {
  return (
    <>
      <Card id="map_card" className="card-center">
        <Card.Img id="map-image" variant="top" src="LocationMap.png" />
        <Card.Body>
          <Card.Text>Locations: </Card.Text>
          <Card.Text>1. Annex I & Annex II</Card.Text>
          <Card.Text>2. University Park North</Card.Text>
          <Card.Text>3. Hensill Hall</Card.Text>
          <Card.Text>4.Gymnasium </Card.Text>
          <Card.Text>5. J. Paul Leonard Library </Card.Text>
          <Card.Text>6. Manzanita Square</Card.Text>
          <Card.Text>7. University Park South</Card.Text>
          <Card.Text>8. Masshouf Wellness Center</Card.Text>
          <Card.Text>9. Parking Garage</Card.Text>
          <Card.Text>10. Cox Stadium</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Map;
