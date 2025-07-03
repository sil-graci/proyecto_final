import * as service from '../services/products.service.js';
import { BadRequest, NotFound } from '../utils/error-response.js';

export const getProducts = async (req, res, next) => {
  try {
    const data = await service.list();
    res.json(data);
  } catch (e) { next(e); }
};

export const getProduct = async (req, res, next) => {
  try {
    const data = await service.getOne(req.params.id);
    res.json(data);
  } catch (e) { next(e); }
};

export const createProduct = async (req, res, next) => {
  try {
    if (!req.body.name) throw new BadRequest('Falta nombre');
    const data = await service.createOne(req.body);
    res.status(201).json(data);
  } catch (e) { next(e); }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await service.deleteOne(req.params.id);
    res.status(204).end();
  } catch (e) { next(e); }
};

export const updateProduct = async (req, res, next) => {
  try {
    const data = await service.updateOne(req.params.id, req.body);
    res.json(data);
  } catch (e) { next(e); }
};
