import React from 'react';
import "./Header.css";
function Header() {
  return (
    <div className="headerdata">
      <h1 className="headingofmainpage">
        <span className="headingofmain">E</span>ra-
        <span className="headingofmain"> E</span>merge
      </h1>
      <div className="headingofcontent">
        <div
          className="headingofmain2"
          onClick={() => window.location.assign("http://localhost:5173/")}
        >
          Home |
        </div>
        <div className="headingofmain2">+1 971 234 1508</div>
      </div>
    </div>
  );
}

export default Header
