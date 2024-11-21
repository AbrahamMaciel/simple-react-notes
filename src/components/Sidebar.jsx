import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar--header">
        <h2>Notes</h2>
        <button type="button" class="sidebar--button">
          +
        </button>
      </div>
      <div className="sidebar--notes">
        <div className="sidebar--note">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div className="sidebar--note">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div className="sidebar--note">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
