import './Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../UI/Card.jsx';

function Expenses(props) {
    console.log(props);
  return (
    <Card className="expenses">
        {props.data.map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
    </Card>
  );
}

export default Expenses;