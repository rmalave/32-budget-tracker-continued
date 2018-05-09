import React from 'react';

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <span>{this.props.price}</span>
      </li>
    )
  }
}
