const express = require('express');
const router = express.Router();

// Mock ride data
const rides = new Map([
  ['1', {
    id: '1',
    distance: 5.2,
    fare: 120,
    pickup: 'Central Park',
    dropoff: 'Times Square',
    duration: '15 mins',
    status: 'completed',
    timestamp: '2024-01-20T10:30:00Z'
  }],
  ['2', {
    id: '2',
    distance: 3.8,
    fare: 90,
    pickup: 'Brooklyn Bridge',
    dropoff: 'Wall Street',
    duration: '12 mins',
    status: 'completed',
    timestamp: '2024-01-20T11:15:00Z'
  }]
]);

// List all rides
router.get('/', (req, res) => {
  const ridesList = Array.from(rides.values()).map(({ id, distance, fare }) => ({
    id,
    distance,
    fare
  }));
  res.json(ridesList);
});

// Get ride details by ID
router.get('/:id', (req, res) => {
  const ride = rides.get(req.params.id);
  
  if (!ride) {
    return res.status(404).json({ error: 'Ride not found' });
  }
  
  res.json(ride);
});

module.exports = router;