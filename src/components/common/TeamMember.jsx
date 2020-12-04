import React from 'react';
import { Link } from 'react-router-dom';

const TeamItem = ({ name, role, image, twitter, facebook, linkedin, dribble, gitHub }) => {
	const imgStyle = {
		objectFit: 'cover'
	};
	return (
		<div className="col-sm-4">
			<div className="team-member">
				<img className="mx-auto rounded-circle" style={{ ...imgStyle }} src={image} alt="" />
				<h4>{name}</h4>
				<p className="text-muted">{role}</p>
				<ul className="list-inline social-buttons">
					<li className="list-inline-item">
						<a target="_blank" href={`${twitter}`} rel="noopener noreferrer">
							<i className="fab fa-twitter" />
						</a>
					</li>
					{dribble ? (
						<li className="list-inline-item">
							<a target="_blank" href={`${dribble}`} rel="noopener noreferrer">
								<i className="fab fa-dribbble" />
							</a>
						</li>
					) : gitHub ? (
						<li className="list-inline-item">
							<a target="_blank" href={`${gitHub}`} rel="noopener noreferrer">
								<i className="fab fa-github" />
							</a>
						</li>
					) : (
						<li className="list-inline-item">
							<a target="_blank" href={`${facebook}`} rel="noopener noreferrer">
								<i className="fab fa-facebook-f" />
							</a>
						</li>
					)}

					<li className="list-inline-item">
						<a target="_blank" href={`${linkedin}`} rel="noopener noreferrer">
							<i className="fab fa-linkedin-in" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TeamItem;
