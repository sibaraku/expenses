import './Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from './Card.jsx';

function Expenses(props) {
    console.log(props);
  return (
    <Card>
      <div className="expenses">
        {props.data.map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
      </div>
    </Card>
  );
}

export default Expenses;