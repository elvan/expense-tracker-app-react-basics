import { useState } from 'react';
import Card from '../core/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  let expensesContent = <Card className='expense-item'>No expenses found</Card>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {expensesContent}
    </Card>
  );
}
