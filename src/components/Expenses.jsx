import './Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';

function Expenses(props) {
    console.log(props);
  return (
    <div className="expenses">
      {props.data.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </div>
  );
}

export default Expenses;