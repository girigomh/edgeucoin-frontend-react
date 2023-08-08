import React, { useState } from "react";
import { ReactComponent as Search } from "../../assets/Icons/Search - New Gray.svg";
import { goals } from "../../utils";
import { Link } from "react-router-dom";

export const Goals = () => {
  const [type, setType] = useState("behavior");

  return (
    <div className="container">
      <div className="header">
        <div className="title">Goals</div>
        <Link to="/goal">
          <div className="btn">
            <div className="text">New Goal</div>
            <div className="plus">+</div>
          </div>
        </Link>
      </div>
      <div className="card goals">
        <div className="filter">
          <div className="type">
            <div
              className={type === "behavior" ? "behavior bold" : "behavior"}
              onClick={() => setType("behavior")}
            >
              Behavioral
            </div>
            <div
              className={type === "academic" ? "academic bold" : "academic"}
              onClick={() => setType("academic")}
            >
              Academic
            </div>
          </div>
        </div>
        <div className="search">
          <input type="search" placeholder="Search for a goal" />
          <div className="btn">
            <Search />
          </div>
        </div>
        {goals.map((goal) => (
          <div className="goal">
            <div className="detail">
              <div className="step">Goal {goal.step}</div>
              <div className="name">{goal.name}</div>
            </div>
            <div className="action">
              <Link to={"/goal/" + goal.id}>
                <div className="btn">Edit</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};