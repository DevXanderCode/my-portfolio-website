import React from "react";

const SingleService = ({ title, desc, icon }) => {
    return (
        <div className="col-md-4">
        <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className={`fas ${icon} fa-stack-1x fa-inverse`}></i>
        </span>
        <h4 className="service-heading">{title}</h4>
        <p className="text-muted">{desc}</p>
    </div>
    );
}

export default SingleService;