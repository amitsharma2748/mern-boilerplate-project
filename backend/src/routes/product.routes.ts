// src/routes/product.routes.ts

import express from 'express';
import { createProduct, getProducts } from '../controllers/product.controller';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (err :any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (_req, res) => {
  try {
    const products = await getProducts();
    console.log('Products fetched:', products);
    res.status(200).json(products);
  } catch (err :any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
