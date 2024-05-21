import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
export default function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-pic_url">
          <img src={props.pic_url}></img>
        </div>
        <h2>{props.title}</h2>
        <div className="expense-item_description">
          <ExpenseDate date={props.date} />
          <div className="expense-item_price">{props.amount}</div>
        </div>
      </Card>
    </li>
  ); 
}