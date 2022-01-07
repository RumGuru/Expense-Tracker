import React, {useState} from 'react';

import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate , setEnteredDate] = useState('');

    const [triggerForm , setTriggerForm] = useState(false);

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
        console.log('Title Change Handler Executed');
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    } 

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log('submit Handler running!');
        const expenseData = {
            title:enteredTitle,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        };

        props.onExpenseSubmit(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        newExpenseTriggerHandler();
    }

    const newExpenseTriggerHandler = () => {
        setTriggerForm((prevState) => {
            return !prevState;
        });
    }
 
    let form = <button onClick={newExpenseTriggerHandler}>Add New Expense</button>;

    if (triggerForm === true){
        form = 
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div> 
        <div className='new-expense__actions'>
            <button onClick={newExpenseTriggerHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
        
    }

    return (
        <div>
            {form}
        </div>
    )
};

export default ExpenseForm;


    