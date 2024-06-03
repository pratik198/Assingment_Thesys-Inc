import React from "react";
import "./RightComponent.css";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import profile6 from "../../assets/profile6.png";
import closeicon from "../../assets/closeicon.png";
function RightComponent() {
  return (
    <div className="right_component">
      <div className="right_component_icon">
        <img src={closeicon} alt="Close Icon" />
      </div>
      <div className="right_profiles">
        <img src={profile1} alt="Profile 1" />
        <img src={profile2} alt="Profile 2" />
        <img src={profile3} alt="Profile 3" />
        <img src={profile4} alt="Profile 4" />
        <img src={profile5} alt="Profile 5" />
        <img src={profile6} alt="Profile 6" />
      </div>
    </div>
  );
}

export default RightComponent;
