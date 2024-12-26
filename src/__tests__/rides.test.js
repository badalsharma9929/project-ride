const request = require('supertest');
const app = require('../index');

describe('Rides API', () => {
  describe('GET /api/rides', () => {
    it('should return list of rides', async () => {
      const res = await request(app).get('/api/rides');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/rides/:id', () => {
    it('should return ride details for valid ID', async () => {
      const res = await request(app).get('/api/rides/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('id', '1');
    });

    it('should return 404 for invalid ID', async () => {
      const res = await request(app).get('/api/rides/999');
      expect(res.statusCode).toBe(404);
    });
  });
});