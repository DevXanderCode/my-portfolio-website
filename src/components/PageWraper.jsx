import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../store/actions/authActions';
import Style from 'style-it';

const PageWrapper = ({ token, logout, noScroll = false, ...props }) => {
	const [ show, handleShow ] = React.useState(false);

	React.useEffect(() => {
		if (noScroll) {
			handleShow(true);
		}
		window.addEventListener('scroll', () => {
			if (!noScroll) {
				if (window.scrollY > 200) {
					handleShow(true);
				} else {
					handleShow(false);
				}
			} else {
				handleShow(true);
			}
		});

		return () => {
			noScroll = false;
			window.removeEventListener('scroll', () => {});
		};
	});

	console.log('logging Show', show);
	return Style.it(
		`
		.nav_black{
			background-color: #343a40 !important;
			transition-timing-function: ease-in;
			transition: all 0.5s;
		}
		.nav_text_white{
			color: white !important;
			transition-timing-function: ease-in;
			transition: all 0.5s;
		}
		.nav_text_black{
			color: black !important;
			transition-timing-function: ease-in;
			transition: all 0.5s;
		}
	`,
		<div>
			<nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${show && 'nav_black'}`} id="mainNav">
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
