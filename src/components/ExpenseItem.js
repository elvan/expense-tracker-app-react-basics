import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>February 20th 2021</div>
      <div className='expense-item__description'>
        <h2>Housing and Rent</h2>
        <div className='expense-item__price'>$1,065</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
