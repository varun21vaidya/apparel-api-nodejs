import request from 'supertest';
import app from '../src/app';

describe('Order Controller', () => {
  it('should check if an order can be fulfilled', async () => {
    const response = await request(app)
      .get('/order/check')
      .send([{ code: 'A1', size: 'M', quantity: 5 }]);

    expect(response.status).toBe(200);
    expect(response.body.canFulfill).toBe(true);
  });

  it('should get the lowest cost for an order', async () => {
    const response = await request(app)
      .get('/order/lowest-cost')
      .send([{ code: 'A1', size: 'M', quantity: 5 }]);

    expect(response.status).toBe(200);
    expect(response.body.totalCost).toBe(250); // Assuming price is 50
  });
});
