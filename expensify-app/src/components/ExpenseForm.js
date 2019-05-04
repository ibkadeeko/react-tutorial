/* eslint-disable react/button-has-type */
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const { expense } = props;
    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount / 100).toString() : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    const { description, amount, note, createdAt } = this.state;
    const { onSubmit } = this.props;

    if (!description || !amount) {
      const error = 'Please Provide Description and Amount';
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: '' }));
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  render() {
    const { description, amount, note, createdAt, error, calendarFocused } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input type="text" placeholder="Amount" value={amount} onChange={this.onAmountChange} />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense(Optional)"
            value={note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
