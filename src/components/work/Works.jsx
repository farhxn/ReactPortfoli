import React, { useState, useEffect } from "react";
import Workitems from "./Workitems";
import { projectsNav } from "./Data";
import { projectsData } from "./Data";

const Works = () => {
    const [item, SetItem] = useState({name:'all'});
    const [project, Setprojects] = useState([]);
    const [active, SetActive] = useState(0);
    
    useEffect(() => {
     if(item.name === "all"){
        Setprojects(projectsData);
     }
     else{
        const newProjects = projectsData.filter((project) =>{
            return project.category.toLowerCase() === item.name;
        });
        Setprojects(newProjects);
     }     
    },[item]);
    const handleClick = (e, index) =>{
        SetItem({name: e.target.textContent.toLowerCase()});
        SetActive(index);
    };
  return (
    <div>
      <div className="work__filter">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => { handleClick(e,index);}}
             className={`${active === index ? 'active-work' : ''} work__item ` } key={index}>
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {   project.map((item) => {
        return <Workitems item={item} key={item.id}/>
        })  }
      </div>
    </div>
  );
};

export default Works;
