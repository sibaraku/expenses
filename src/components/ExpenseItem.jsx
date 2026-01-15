import ExpenseDate from './ExpenseDate.jsx';
import './ExpenseItem.css';
import Card from './Card.jsx';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate data={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">
          {props.data.price}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
