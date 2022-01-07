import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

          if (props.items.length === 0) {
              return (<h2 className='expenses-list__fallback'>No Expenses This Year</h2>);
          }
    
    return (
        <ul className='expenses-list'>
        {
            props.items.map((expense)=>{
                return <ExpenseItem key={expense.id} name={expense.title} amount={expense.amount} date={expense.date} />
              })
        }
        </ul>
    );
}

export default ExpenseList;