import Expenses from './expenses/Expenses';
import NewExpense from './new-expense/NewExpense';

export default function App() {
  const expenses = [
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
    }
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}
