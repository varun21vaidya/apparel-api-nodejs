import { Request, Response } from 'express';
import { readData, writeData } from '../services/dataService';
import { Apparel } from '../models/apparel';

export const updateStockAndPrice = (req: Request, res: Response) => {
  console.log("req.body",req.body)
  const { code, size, quantity, price } = req.body;

  if (!code || !size || quantity === undefined || price === undefined) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const data = readData();
  const apparelIndex = data.findIndex(item => item.code === code && item.size === size);

  if (apparelIndex >= 0) {
    data[apparelIndex].quantity = quantity;
    data[apparelIndex].price = price;
  } else {
    data.push({ code, size, quantity, price });
  }

  writeData(data);
  res.status(200).json({ message: 'Stock and price updated successfully' });
};

export const updateMultipleStockAndPrice = (req: Request, res: Response) => {
  const updates: Apparel[] = req.body;

  if (!Array.isArray(updates) || updates.some(item => !item.code || !item.size || item.quantity === undefined || item.price === undefined)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const data = readData();

  updates.forEach(update => {
    const apparelIndex = data.findIndex(item => item.code === update.code && item.size === update.size);

    if (apparelIndex >= 0) {
      data[apparelIndex].quantity = update.quantity;
      data[apparelIndex].price = update.price;
    } else {
      data.push(update);
    }
  });

  writeData(data);
  res.status(200).json({ message: 'Stock and price updated successfully' });
};
