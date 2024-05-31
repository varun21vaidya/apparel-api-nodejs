import request from 'supertest';
import app from '../src/app';

describe('Vendor Controller', () => {
  it('should update stock and price for one apparel', async () => {
    const response = await request(app)
      .post('/vendor/update')
      .send({ code: 'A1', size: 'M', quantity: 10, price: 50 });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Stock and price updated successfully');
  });

  it('should update stock and price for multiple apparels', async () => {
    const response = await request(app)
      .post('/vendor/update-multiple')
      .send([
        { code: 'A1', size: 'M', quantity: 10, price: 50 },
        { code: 'A2', size: 'L', quantity: 5, price: 30 }
      ]);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Stock and price updated successfully');
  });
});
