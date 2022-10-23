import React from "react";
import "./skill.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Android from "./Android";

const Skill = () => {
  return (
    <section className="skills section" id="skill">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>
      <div className=" grid skills__container container">
        <Frontend />
        <Backend />
        <Database/>
        <Android/>
      </div>
    </section>
  );
};

export default Skill;
