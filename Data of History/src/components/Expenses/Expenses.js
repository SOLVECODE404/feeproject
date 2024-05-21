import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../NexExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const defaultYear = "1945";
  const [filteredYear, setFilteredYear] = useState(defaultYear);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [category, setCategory] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const searchChangeHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  const categoryChangeHandler = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const yearMatches = expense.date.getFullYear().toString() === filteredYear;
    const titleMatches =
      searchKeyword === "" ||
      expense.title.toLowerCase().includes(searchKeyword.toLowerCase());
    const categoryMatches = category === "all" || expense.category === category;
    return yearMatches && titleMatches && categoryMatches;
  });

  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <button className="Search_Box">
            <span className="fa fa-search"></span>
          </button>
          <input
            type="text"
            value={searchKeyword}
            onChange={searchChangeHandler}
            placeholder="Search History"
          />
          <select className="searchbycategory"
            value={category}
            onChange={(e) => categoryChangeHandler(e.target.value)}
          >
            <option value="all">All</option>
            <option value="war">War</option>
            <option value="monuments">Monuments</option>
            <option value="events">Events</option>
            <option value="person">Person</option>
          </select>
        </div>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
