import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value
    // }));
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });

    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredAmount: event.target.value
    // }));
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });

    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredDate: event.target.value
    // }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onCancel();
  };

  const cancelEditingHandler = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            min='1'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            min='2019-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelEditingHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
