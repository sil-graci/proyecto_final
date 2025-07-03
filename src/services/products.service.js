import * as model from '../models/products.model.js';

export const list = () => model.getAll();
export const getOne = (id) => model.getById(id);
export const createOne = (data) => model.create(data);
export const updateOne = (id, data) => model.update(id, data);
export const deleteOne = (id) => model.remove(id);
