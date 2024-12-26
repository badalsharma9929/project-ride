# Rides API

A simple REST API for managing users and rides.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm run dev
   ```

The server will start on port 3000.

## API Documentation

### Authentication

#### Register User
- **POST** `/api/users/register`
- **Body:**
  ```json
  {
    "username": "john_doe",
    "password": "secure123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "username": "john_doe"
  }
  ```

### Rides

#### List Rides
- **GET** `/api/rides`
- **Response:**
  ```json
  [
    {
      "id": "1",
      "distance": 5.2,
      "fare": 120
    },
    {
      "id": "2",
      "distance": 3.8,
      "fare": 90
    }
  ]
  ```

#### Get Ride Details
- **GET** `/api/rides/:id`
- **Response:**
  ```json
  {
    "id": "1",
    "distance": 5.2,
    "fare": 120,
    "pickup": "Central Park",
    "dropoff": "Times Square",
    "duration": "15 mins",
    "status": "completed",
    "timestamp": "2024-01-20T10:30:00Z"
  }
  ```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400` - Bad Request (invalid input)
- `404` - Not Found
- `500` - Internal Server Error

## Testing

Run tests using:
```bash
npm test
```