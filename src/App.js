import { useState } from 'react';
import Expenses from './expenses/Expenses';
import NewExpense from './new-expense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Housing and Rent',
    amount: 1065.25,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 819.5,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Travel',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'Food and Groceries',
    amount: 610.75,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e5',
    title: 'Utility Bills',
    amount: 543.25,
    date: new Date(2020, 2, 12)
  },
  {
    id: 'e6',
    title: 'Cell Phone',
    amount: 789.25,
    date: new Date(2020, 4, 15)
  },
  {
    id: 'e7',
    title: 'School Costs',
    amount: 1866.8,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e8',
    title: 'Pet Food and Care',
    amount: 819.5,
    date: new Date(2021, 9, 25)
  }
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
