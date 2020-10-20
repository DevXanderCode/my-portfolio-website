import React from "react";
import { Link } from "react-router-dom";

const SinglePortfolio = ({ title, subtitle, image="img/portfolio/06-thumbnail.jpg", modalLink="/portfolioModal1" }) => {
    return(
        <div className="col-md-4 col-sm-6 portfolio-item">
            <Link className="portfolio-link" data-toggle="modal" to={modalLink}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                <img className="img-fluid w-100" src={image} alt="" />
            </Link>
            <div className="portfolio-caption">
                <h4>{title}</h4>
                <p className="text-muted">{subtitle}</p>
            </div>
        </div>
    );
}

export default SinglePortfolio;