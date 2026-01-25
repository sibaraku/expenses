import './Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../UI/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("Year data is Expenses.jsx ", selectedYear);
    }
    
  return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.data.map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
    </Card>
  );
}

export default Expenses;