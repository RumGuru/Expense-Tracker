import React, {useState} from 'react';

import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpense = (expense) => {
    console.log(expense);
    console.log(expenses);
    setExpenses((prevState)=>{
      return[expense, ...prevState,];
    });
  };

  console.log(expenses);

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onExpenseReceive = {newExpense}/>
      <Expenses expensess={expenses}/>
    </div>
  );
}

export default App;
