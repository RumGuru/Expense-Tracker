import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';



const NewExpense = (props) => {

    const newExpense = (newExpense) => {
        const expense = {
            ...newExpense,
            id:Math.random().toString()
        };

        props.onExpenseReceive(expense);

    }

    return (
        <div className="new-expense">
           <ExpenseForm onExpenseSubmit={newExpense} />
        </div>
    )
};

export default NewExpense;