import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { expenses: state.expense.expenses };
}

const mapDispatchToProps = dispatch => {
  return {
    updateExpense: expense => dispatch(updateExpense(expense))
  };
};

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let expenses = this.props.expenses;
    return (
      <div>
        <ul>
          {expenses.map(expense => {
            return <ExpenseItem name={expense.name} price={expense.price} />
          })}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
