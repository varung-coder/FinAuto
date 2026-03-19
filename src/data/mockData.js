// Mock financial data for FinAuto

export const mockTransactions = [
  { id: 't1', merchant: 'Swiggy', category: 'Food', amount: -480, date: '2025-03-18', icon: '🍔' },
  { id: 't2', merchant: 'Netflix', category: 'Entertainment', amount: -649, date: '2025-03-17', icon: '🎬' },
  { id: 't3', merchant: 'Uber', category: 'Transport', amount: -220, date: '2025-03-17', icon: '🚗' },
  { id: 't4', merchant: 'Amazon', category: 'Shopping', amount: -1299, date: '2025-03-16', icon: '🛍️' },
  { id: 't5', merchant: 'Zomato', category: 'Food', amount: -340, date: '2025-03-16', icon: '🍕' },
  { id: 't6', merchant: 'BSES Electricity', category: 'Bills', amount: -1800, date: '2025-03-15', icon: '⚡' },
  { id: 't7', merchant: 'Salary Credit', category: 'Income', amount: 85000, date: '2025-03-01', icon: '💰' },
  { id: 't8', merchant: 'Gym Membership', category: 'Health', amount: -999, date: '2025-03-10', icon: '💪' },
  { id: 't9', merchant: 'Spotify', category: 'Entertainment', amount: -119, date: '2025-03-09', icon: '🎵' },
  { id: 't10', merchant: 'BigBasket', category: 'Food', amount: -1250, date: '2025-03-08', icon: '🛒' },
  { id: 't11', merchant: 'Ola', category: 'Transport', amount: -180, date: '2025-03-07', icon: '🚕' },
  { id: 't12', merchant: 'Myntra', category: 'Shopping', amount: -2100, date: '2025-03-06', icon: '👗' },
  { id: 't13', merchant: 'Airtel Broadband', category: 'Bills', amount: -899, date: '2025-03-05', icon: '📶' },
  { id: 't14', merchant: 'Apollo Pharmacy', category: 'Health', amount: -560, date: '2025-03-04', icon: '💊' },
  { id: 't15', merchant: 'McDonald\'s', category: 'Food', amount: -380, date: '2025-03-03', icon: '🍟' },
  { id: 't16', merchant: 'Steam', category: 'Entertainment', amount: -499, date: '2025-03-02', icon: '🎮' },
  { id: 't17', merchant: 'IRCTC', category: 'Transport', amount: -840, date: '2025-03-12', icon: '🚂' },
  { id: 't18', merchant: 'Jio Recharge', category: 'Bills', amount: -299, date: '2025-03-11', icon: '📱' },
  { id: 't19', merchant: 'Flipkart', category: 'Shopping', amount: -3499, date: '2025-03-14', icon: '📦' },
  { id: 't20', merchant: 'Cult.fit', category: 'Health', amount: -699, date: '2025-03-13', icon: '🏋️' },
];

export const mockBudgets = [
  { id: 'b1', category: 'Food', icon: '🍔', color: '#F97316', limit: 5000, spent: 2450 },
  { id: 'b2', category: 'Transport', icon: '🚗', color: '#3B82F6', limit: 3000, spent: 1240 },
  { id: 'b3', category: 'Bills', icon: '⚡', color: '#8B5CF6', limit: 4000, spent: 2998 },
  { id: 'b4', category: 'Entertainment', icon: '🎬', color: '#EC4899', limit: 1500, spent: 1267 },
  { id: 'b5', category: 'Shopping', icon: '🛍️', color: '#10B981', limit: 4000, spent: 6898 },
  { id: 'b6', category: 'Health', icon: '💊', color: '#14B8A6', limit: 2500, spent: 2258 },
];

export const mockGoals = [
  {
    id: 'g1',
    name: 'Emergency Fund',
    icon: '🛡️',
    target: 200000,
    saved: 85000,
    deadline: '2025-12-31',
    color: '#4F8EF7',
  },
  {
    id: 'g2',
    name: 'Europe Trip',
    icon: '✈️',
    target: 150000,
    saved: 42000,
    deadline: '2025-10-01',
    color: '#7C3AED',
  },
  {
    id: 'g3',
    name: 'New MacBook',
    icon: '💻',
    target: 120000,
    saved: 78000,
    deadline: '2025-06-30',
    color: '#10B981',
  },
  {
    id: 'g4',
    name: 'Home Down Payment',
    icon: '🏠',
    target: 500000,
    saved: 125000,
    deadline: '2026-12-31',
    color: '#F97316',
  },
];

export const mockInsights = [
  {
    id: 'i1',
    title: 'Shopping Budget Exceeded',
    description: 'You\'ve spent ₹6,898 on Shopping — 72.5% over your ₹4,000 budget. Consider reviewing your purchases.',
    severity: 'warning',
    icon: '⚠️',
  },
  {
    id: 'i2',
    title: 'Great Savings Rate!',
    description: 'You\'re saving ~20% of your income this month. Financial experts recommend 20–30%, so you\'re right on track.',
    severity: 'success',
    icon: '🎯',
  },
  {
    id: 'i3',
    title: 'Entertainment Near Limit',
    description: 'Entertainment spending is at 84% of your budget. With 12 days left this month, be mindful of new subscriptions.',
    severity: 'info',
    icon: '💡',
  },
  {
    id: 'i4',
    title: 'Emergency Fund Progress',
    description: 'Your emergency fund is at 42.5% of the ₹2,00,000 target. You\'re 3.5 months ahead of schedule!',
    severity: 'success',
    icon: '🚀',
  },
  {
    id: 'i5',
    title: 'Top Spending Category',
    description: 'Food is your highest recurring expense this month at ₹2,450. Meal prepping could save you ~₹800/month.',
    severity: 'info',
    icon: '📊',
  },
];

export const mockSpendingTrend = [
  { month: 'Oct', spending: 18200, income: 85000 },
  { month: 'Nov', spending: 22400, income: 85000 },
  { month: 'Dec', spending: 31500, income: 85000 },
  { month: 'Jan', spending: 19800, income: 85000 },
  { month: 'Feb', spending: 24100, income: 85000 },
  { month: 'Mar', spending: 17113, income: 85000 },
];

export const mockCategorySpending = [
  { name: 'Food', value: 2450, color: '#F97316' },
  { name: 'Shopping', value: 6898, color: '#10B981' },
  { name: 'Bills', value: 2998, color: '#8B5CF6' },
  { name: 'Transport', value: 1240, color: '#3B82F6' },
  { name: 'Entertainment', value: 1267, color: '#EC4899' },
  { name: 'Health', value: 2258, color: '#14B8A6' },
];
