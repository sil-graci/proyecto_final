import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/db.js';

const col = collection(db, 'products');

export const getAll = async () => {
  const snap = await getDocs(col);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getById = async (id) => {
  const docRef = doc(db, 'products', id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) throw { status: 404, message: 'Producto no encontrado' };
  return { id: snap.id, ...snap.data() };
};

export const create = async (data) => {
  const ref = await addDoc(col, data);
  return { id: ref.id, ...data };
};

export const update = async (id, data) => {
  const docRef = doc(db, 'products', id);
  await updateDoc(docRef, data);
  return getById(id);
};

export const remove = async (id) => {
  const docRef = doc(db, 'products', id);
  await deleteDoc(docRef);
  return;
};
