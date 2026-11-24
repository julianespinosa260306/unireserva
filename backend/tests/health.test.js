const request = require('supertest');
const app = require('../src/app');

describe('GET /api/v1/health', () => {
  it('responds 200 with the { data, error } format', async () => {
    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: { status: 'ok' }, error: null });
  });
});
