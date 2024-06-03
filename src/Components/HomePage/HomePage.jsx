import React from "react";
import "./HomePage.css";
import Left from "../LeftComponent/Left";
import TaskBoards from "../TaskBoards/TaskBoards";
import RightComponent from "../RightComponent/RightComponent";

function HomePage() {
  return (
    <div className="home_page">
      <Left />
      <TaskBoards />
      <RightComponent />
    </div>
  );
}

export default HomePage;
