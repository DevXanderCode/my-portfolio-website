import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../store/actions/authActions';

const PageWrapper = ({ token, logout, ...props }) => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-dark fixed-top"
				style={{ background: '#343a40' }}
				id="mainNav"
			>
				<div className="container">
					<Link className="navbar-brand js-scroll-trigger" to="/">
						Start Bootstrap
					</Link>
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						Menu
						<i className="fas fa-bars" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav text-uppercase ml-auto">
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/services">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/portfolio">
									Portfolio
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/blog">
									Blog
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/team">
									Team
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/contact">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								{token ? (
									<Link
										className="nav-link js-scroll-trigger"
										to="/"
										onClick={(e) => {
											logout(token);
											console.log('loggout');
										}}
									>
										Logout
									</Link>
								) : (
									<Link className="nav-link js-scroll-trigger" to="/admin">
										Login
									</Link>
								)}
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{props.children}
		</div>
	);
};

const mapStateToProps = (state) => ({
	...state.auth
});

const mapDispatchToProps = (dispatch) => ({
	logout: (token) => {
		dispatch(AuthActions.logout(token));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
