import express from 'express';
import bodyParser from 'body-parser';
import { updateStockAndPrice, updateMultipleStockAndPrice } from './controllers/vendorController';
import { checkOrderFulfillment, getLowestCost } from './controllers/orderController';

const app = express();
app.use(bodyParser.json());

app.post('/vendor/update', updateStockAndPrice);
app.post('/vendor/update-multiple', updateMultipleStockAndPrice);
app.get('/order/check', checkOrderFulfillment);
app.get('/order/lowest-cost', getLowestCost);

export default app;
