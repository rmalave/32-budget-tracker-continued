import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { createExpense } from '../../actions/expenseActions';

const mapDispatchToProps = dispatch => {
  return {
    createExpense: expense => dispatch(createExpense(expense))
  };
};

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let { name, price } = this.state;
    let id = uuidv1();
    let timestamp = Date.now();
    this.props.createExpense({ name, price, id, timestamp });
    this.setState({ name: '', price: 0 });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="name" name="name" value={this.state.name} />
        <input onChange={this.handleChange} type="number" placeholder="price" name="price" value={this.state.value} />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(ExpenseForm);
