import React from 'react';

import TeamMember from './TeamMember';
const teammembers = [
	{ name: 'Olabode Ebiniyi', role: 'Lead Designer', image: 'img/team/bode.jpg' },
	{ name: 'Larry Parker', role: 'Lead Marketer', image: 'img/team/2.jpg' },
	{ name: 'Diana Pertersen', role: 'Lead Developer', image: 'img/team/3.jpg' }
];

const Team = () => {
	return (
		<section className="bg-light page-section" id="team">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase">Our Amazing Team</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
				</div>
				<div className="row">{teammembers.map((teammember, i) => <TeamMember key={i} {...teammember} />)}</div>
				<div className="row">
					<div className="col-lg-8 mx-auto text-center">
						<p className="large text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis,
							quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
