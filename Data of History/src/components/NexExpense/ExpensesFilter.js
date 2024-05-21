import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* <label>Filter by year</label> */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="1945">1945</option>
          <option value="1953">1953</option>
          <option value="1963">1963</option>
          <option value="1995">1995</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

