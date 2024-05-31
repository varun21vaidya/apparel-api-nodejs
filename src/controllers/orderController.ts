import { Request, Response } from 'express';
import { readData } from '../services/dataService';
import { Apparel } from '../models/apparel';

export const checkOrderFulfillment = (req: Request, res: Response) => {
  const order: Apparel[] = req.body;

  if (!Array.isArray(order) || order.some(item => !item.code || !item.size || item.quantity === undefined)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const data = readData();
  const canFulfill = order.every(item => {
    const apparel = data.find(d => d.code === item.code && d.size === item.size);
    return apparel && apparel.quantity >= item.quantity;
  });

  res.status(200).json({ canFulfill });
};

export const getLowestCost = (req: Request, res: Response) => {
  const order: Apparel[] = req.body;

  if (!Array.isArray(order) || order.some(item => !item.code || !item.size || item.quantity === undefined)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const data = readData();
  let totalCost = 0;

  const canFulfill = order.every(item => {
    const apparel = data.find(d => d.code === item.code && d.size === item.size);
    if (apparel && apparel.quantity >= item.quantity) {
      totalCost += item.quantity * apparel.price;
      return true;
    }
    return false;
  });

  if (!canFulfill) {
    return res.status(400).json({ error: 'Order cannot be fulfilled' });
  }

  res.status(200).json({ totalCost });
};
