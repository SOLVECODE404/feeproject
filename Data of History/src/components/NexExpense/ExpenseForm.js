import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [entereddate, setentereddate] = useState("");
  const [enteredpic, setenteredPic] = useState("");
  const titleChangeHandler = (event) => {
    setenteredtitle(event.target.value);
  };
  const PicChangeHandler = (event) => {
    setenteredPic(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setenteredamount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setentereddate(event.target.value);
  };
  const submithandler = (event) => {
    event.preventDefault(); 
    const ExpenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
      pic_url: enteredpic,
    };
    props.onSaveExpenseData(ExpenseData);
    setenteredamount("");
    setentereddate("");
    setenteredtitle("");
    setenteredPic("");
  };
  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" value={enteredtitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Pic url</label>
          <input
            type="text"
            value={enteredpic}
            onChange={PicChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredamount}
            onChange={AmountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1900-01-01"
            max="2023-12-31"
            value={entereddate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Event</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
