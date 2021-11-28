import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2020, 2, 25);
  const expenseTitle = 'Housing and Rent';
  const expenseAmount = 1065;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
