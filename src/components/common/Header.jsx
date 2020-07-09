import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, subtitle, buttonText, link, image, showButton }) => {
    return(
    <header className="masthead" style={{backgroundImage: `url(${image})`}}>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">{title}</div>
                <div className="intro-heading text-uppercase">{subtitle}</div>
                {showButton &&
                    <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={`${link}`}>{buttonText}</Link>
                }
            </div>
        </div>
    </header>
    );
}

export default Header;