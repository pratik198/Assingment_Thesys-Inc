import React, { useState } from "react";
import "./Left.css";
import MenuOpen from "../../assets/MenuOpen.png";
import CrmDashboard from "../../assets/CRMDASHBOARD.png";
import Task from "../../assets/Task.png";
import Drive from "../../assets/Drive.png";
import Board from "../../assets/Boards.png";
import Updates from "../../assets/updates.png";
import Analytics from "../../assets/Analytics.png";
import Setting from "../../assets/Settings.png";
import Two from "../../assets/Two.png";
import UpperArrow from "../../assets/UpperArrow.png";
import Four from "../../assets/Four.png";
import FourThreeFive from "../../assets/FourThreeFive.png";
import Five from "../../assets/Five.png";
import Nancy from "../../assets/Nancy.png";

function Left() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="left_component">
      <div className="left_upper">
        <div className="Head">
          <h3>Dashboard</h3>
          <div className="left_component_icon">
            <img src={MenuOpen} alt="Menu Icon" />
          </div>
        </div>
        <div className="left_component_content">
          <div className="sub_heading_left" onClick={handleCollapse}>
            <p>DASHBOARDS</p>
            <img
              className="img__name"
              src={UpperArrow}
              alt="Arrow Icon"
              style={{
                transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
              }}
            />
          </div>
          <div
            className="left_side_content"
            style={{ maxHeight: isCollapsed ? 0 : "100vh", overflow: "hidden" }}
          >
            {isCollapsed ? null : (
              <>
                <div className="list_list">
                  <div className="list_sub">
                    <img src={CrmDashboard} alt="CRM Dashboard Icon" />
                    <p className="list_name">CRM Dashboard</p>
                  </div>
                  <div className="img_list">2</div>
                </div>
                <div className="list_list active">
                  <div className="list_sub">
                    <img src={Task} alt="Task Icon" />
                    <p className="list_name">Tasks</p>
                  </div>
                  <div className="img_list">4</div>
                </div>
                <div className="list_list">
                  <div className="list_sub">
                    <img src={Drive} alt="Drive Files Icon" />
                    <p className="list_name">Drive Files</p>
                  </div>
                  <div className="img_list">435</div>
                </div>
                <div className="list_list">
                  <div className="list_sub">
                    <img src={Board} alt="Boards Icon" />
                    <p className="list_name">Boards</p>
                  </div>
                  <div className="img_list">5</div>
                </div>
                <div className="list_list">
                  <div className="list_sub">
                    <img src={Updates} alt="Updates Icon" />
                    <p className="list_name">Updates</p>
                  </div>
                </div>
                <div className="list_list">
                  <div className="list_sub">
                    <img src={Analytics} alt="Analytics Icon" />
                    <p className="list_name">Analytics</p>
                  </div>
                  <div className="img_list">2</div>
                </div>
                <div className="list_list">
                  <div className="list_sub">
                    <img src={Setting} alt="Settings Icon" />
                    <p className="list_name">Settings</p>
                  </div>
                  <div className="img_list">2</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="left_lower">
        <div className="nancy">
          <img src={Nancy} alt="." />
        </div>
      </div>
    </div>
  );
}

export default Left;
