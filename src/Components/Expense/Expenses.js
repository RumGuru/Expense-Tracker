import React, {useState} from "react";
import ExpenseChart from "./ExpenseChart";


import ExpenseList from "./ExpenseList";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [yearFilter , setYearFilter] = useState('2020');

    const receiveYear = (year)=>{
        setYearFilter(year);
    };
    console.log('FROM EXPENSES' + props.expensess[0].title);

    const filteredExpenses = props.expensess.filter((expense)=> expense.date.getFullYear() == yearFilter);

return(
<div className={'expenses'}>
    <ExpensesFilter currentYear={yearFilter} onYearChange={receiveYear}/>
    <ExpenseChart expenses={filteredExpenses} />
    <ExpenseList items={filteredExpenses}/>
</div>
);
};

export default Expenses;

/*{props.expensess.map((expense)=>{
        console.log(expense.title)
        return <ExpenseItem key={expense.id} name={expense.title} amount={expense.amount} date={expense.date} />
    })}*/