import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// redux connect
import { connect } from 'react-redux';

// Drawer import
import { Drawer, IconButton, Divider, Tooltip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Component
import SideBar from '../components/common/SideBar';

// Auth Actions
import * as AuthActions from '../store/actions/authActions';

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	toolbar: {
		paddingRight: 24,
		display: 'flex',
		justifyContent: 'space-between'
	},
	logoutBtn: {
		backgroundColor: '#751aff'
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	appBarSpace: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		whiteSpace: 'noWrap',
		position: 'relative',
		left: 0,
		top: 0,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		width: theme.spacing(7),
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	mainContent: {
		flexGrow: 1,
		padding: theme.spacing(3),
		height: '100%',
		overflow: 'auto',
		paddingLeft: '10px'
	}
});

const AdminWrapper = ({ classes, logout, token, ...props }) => {
	const [ drawerState, setDrawerState ] = React.useState({ open: true });

	const handleDrawerOpen = (e) => {
		setDrawerState({ open: true });
	};

	const handleDrawerClose = (e) => {
		setDrawerState({ open: false });
	};
	return (
		<div id="admin-page">
			<div style={{ padding: '0', margin: '0' }} className={classes.root}>
				<AppBar className={classNames(classes.appBar, drawerState.open && classes.appBarShift)}>
					<Toolbar className={classes.toolbar}>
						{drawerState.open ? null : (
							<IconButton onClick={(e) => handleDrawerOpen(e)}>
								<MenuIcon />
							</IconButton>
						)}

						<Typography component="h1" variant="h6" color="inherit" noWrap>
							Admin
						</Typography>
						<Tooltip title="logout" arrow>
							<IconButton
								className={classes.logoutBtn}
								onClick={(e) => {
									logout(token);
								}}
							>
								<ExitToAppIcon />
							</IconButton>
						</Tooltip>
					</Toolbar>
				</AppBar>
				<Drawer
					classes={{
						paper: classNames(classes.drawerPaper, !drawerState.open && classes.drawerPaperClose)
					}}
					variant="permanent"
					open={drawerState.open}
				>
					<div className={classes.toolbarIcon}>
						<IconButton onClick={(e) => handleDrawerClose(e)}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<SideBar />
				</Drawer>
				<main className={classes.mainContent}>
					<div className={classes.appBarSpace} />
					{props.children}
				</main>
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminWrapper));
