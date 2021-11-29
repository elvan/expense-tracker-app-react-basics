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

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
      {filteredExpenses.length === 0 && (
        <Card className='expense-item'>No expenses found</Card>
      )}
    </Card>
  );
}
