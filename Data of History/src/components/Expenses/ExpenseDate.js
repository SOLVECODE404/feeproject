import './ExpenseDate.css';
import React from 'react'

function ExpenseDate(props) {
    const day=props.date.toLocaleString('en-US',{month:'long'});
    const month=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date_month'>{month}</div>
      <div className='expense-date_day'>{day}</div>
      <div className='expense-date_year'>{year}</div>
    </div>
  )
}

export default ExpenseDate;

