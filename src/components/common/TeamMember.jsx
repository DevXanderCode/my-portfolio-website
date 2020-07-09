import React from "react";
import { Link } from "react-router-dom";

const TeamItem = ({ name, role, image }) => {
    return(
    <div className="col-sm-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={image} alt="" />
          <h4>{name}</h4>
          <p className="text-muted">{role}</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default TeamItem;