import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from './config';

// --- Transactions ---
export const addTransaction = (userId, data) =>
  addDoc(collection(db, 'transactions'), { ...data, userId, createdAt: new Date() });

export const getTransactions = async (userId) => {
  const q = query(
    collection(db, 'transactions'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// --- Budgets ---
export const saveBudget = (userId, data) =>
  addDoc(collection(db, 'budgets'), { ...data, userId });

export const getBudgets = async (userId) => {
  const q = query(collection(db, 'budgets'), where('userId', '==', userId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const updateBudget = (id, data) =>
  updateDoc(doc(db, 'budgets', id), data);

export const deleteBudget = (id) => deleteDoc(doc(db, 'budgets', id));

// --- Goals ---
export const saveGoal = (userId, data) =>
  addDoc(collection(db, 'goals'), { ...data, userId });

export const getGoals = async (userId) => {
  const q = query(collection(db, 'goals'), where('userId', '==', userId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const updateGoal = (id, data) =>
  updateDoc(doc(db, 'goals', id), data);

export const deleteGoal = (id) => deleteDoc(doc(db, 'goals', id));
