import React from 'react';
import PageWrapper from './components/PageWraper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Team from './components/common/Team';
import { connect } from 'react-redux';
// pages
import { Home, About, ServicesPage, PortfolioPage, Contact, Login, Blog, Single, Signup } from './components/Pages';

import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';

// Admin Pages
import { Dashboard, Users, Posts, AddPost } from './components/Pages/Admin';

function App({ auth }) {
	return (
		<Router>
			<Route
				exact
				path="/admin"
				render={(props) => {
					return (
						<div>
							{auth.token ? (
								<AdminWrapper>
									<Dashboard {...props} />
								</AdminWrapper>
							) : (
								<LoginWrapper>
									<Login {...props} />
								</LoginWrapper>
							)}
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/admin/posts"
				render={(props) => {
					return (
						<div>
							{auth.token ? (
								<AdminWrapper>
									<Posts {...props} />
								</AdminWrapper>
							) : (
								<LoginWrapper>
									<Login {...props} />
								</LoginWrapper>
							)}
						</div>
					);
				}}
			/>
			<Route
				path="/admin/users"
				render={(props) => {
					return (
						<div>
							{auth.token ? (
								<AdminWrapper>
									<Users {...props} />
								</AdminWrapper>
							) : (
								<LoginWrapper>
									<Login {...props} />
								</LoginWrapper>
							)}
						</div>
					);
				}}
			/>
			<Route
				path="/admin/posts/:view/:id"
				render={(props) => {
					return (
						<div>
							{auth.token ? (
								<AdminWrapper>
									<AddPost {...props} />
								</AdminWrapper>
							) : (
								<LoginWrapper>
									<Login {...props} />
								</LoginWrapper>
							)}
						</div>
					);
				}}
			/>
			<Route
				path="/admin/posts/:view"
				exact
				render={(props) => {
					return (
						<div>
							{auth.token ? (
								<AdminWrapper>
									<AddPost {...props} />
								</AdminWrapper>
							) : (
								<LoginWrapper>
									<Login {...props} />
								</LoginWrapper>
							)}
						</div>
					);
				}}
			/>
			<Route
				path="/"
				exact
				render={(props) => (
					<PageWrapper>
						<Home {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/blog/:slug"
				exact
				render={(props) => (
					<PageWrapper>
						<Single {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/blog"
				exact
				render={(props) => (
					<PageWrapper>
						<Blog {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/about"
				render={(props) => (
					<PageWrapper>
						<About {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/services"
				render={(props) => (
					<PageWrapper>
						<ServicesPage {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/portfolio"
				render={(props) => (
					<PageWrapper>
						<PortfolioPage {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/team"
				render={(props) => (
					<PageWrapper>
						<Team {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/contact"
				render={(props) => (
					<PageWrapper>
						<Contact {...props} />
					</PageWrapper>
				)}
			/>
			<Route
				path="/signup"
				render={(props) => (
					<LoginWrapper>
						<Signup {...props} />
					</LoginWrapper>
				)}
			/>
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
