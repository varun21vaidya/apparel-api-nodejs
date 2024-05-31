import fs from 'fs';
import path from 'path';
import { Apparel } from '../models/apparel';

const dataFilePath = path.join(__dirname, '../../data/apparel.json');

export const readData = (): Apparel[] => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data file:', error);
    return [];
  }
};

export const writeData = (data: Apparel[]): void => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing data file:', error);
  }
};
