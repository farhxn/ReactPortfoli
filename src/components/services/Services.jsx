/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close" ></i>
              <i class="uil uil-web-grid services__icon-model"></i>
              <h3 className="services__modal-title">UI/UX Developer</h3>
              <p className="services__modal-description">
                Providing you services with User experience.
                quality work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services_modal-service">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    &nbsp; I can develop Interactive user Interface
                  </p>
                </li>

                <li className="services_modal-service">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    &nbsp; Customize websites according to the costumer requirements
                  </p>
                </li>

                <li className="services_modal-service">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    &nbsp; Completely Compatible with all browser 
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
          <i class="uil uil-database services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <i class="uil uil-database services__icon-model"></i>
              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
              Providing you services with User experience.
              quality work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services_modal-service">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                   &nbsp; I can develop web application using ASP .Net MVC & SQL Server 
                  </p>
                </li>

                <li className="services_modal-service">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    &nbsp; I can develop web application using PHP & MYSQL
                  </p>
                </li>

                <li className="services_modal-service">
                   <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    &nbsp;I can develop web application using PHP laravel & MYSQL
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
          <i class="uil uil-android services__icon"></i>
           
            <h3 className="services__title">
              Android <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <i class="uil uil-android services__icon-model"></i>
              <h3 className="services__modal-title">Android Developer</h3>
              <p className="services__modal-description">
              Providing you services with User experience.
              quality work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services_modal-service">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>{" "}
                    I can develop Interactive user Interface
                  </p>
                </li>

                <li className="services_modal-service">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle service__modal-icon"></i>{" "}
                    I can develop dynamic applications
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
