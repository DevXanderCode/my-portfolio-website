import React from "react";
import SingleService from "./SingleService";

const services = [
    {title: "E-commerce",
     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: "fa-shopping-cart"},
    {title: "Responsive Design",
     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: "fa-laptop"},
    {title: "Web Security",
     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      icon: "fa-lock"},
];

const Services = () => {
    return(
    <section className="page-section" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            </div>
            <div className="row text-center">
                {services.map((service, i) => (<SingleService key={i} {...service} />))}
            </div>
        </div>
    </section>
    );
}

export default Services;