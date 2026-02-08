import './ExpenseForm.css';
import { Fragment, useRef, useState } from 'react';
import Error from '../UI/Error.jsx';

const ExpenseForm = (props) => {
    const [error, setError] = useState(null);
    console.log(error);
    
    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const errorHandler = () => {
        setError(null);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

            if (
                enteredTitle.trim().length == 0 ||
                enteredAmount.trim().length == 0 ||
                enteredDate.trim().length == 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title or amount or date (non-empty values)'
            });
            return;
        }
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';

        props.onCancel();
    };

    return (
    <Fragment>
        {error && (
            <Error
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
        )}

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' ref={titleInputRef} />
                </div>

                <div className='new-expense__control'>
                    <label>Price</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        ref={amountInputRef}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2024-01-01'
                        max='2026-12-31'
                        ref={dateInputRef}
                    />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </Fragment>
);

};

export default ExpenseForm;