import * as React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
// import { Link } from "@material-ui/core";
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import TableView from '../../common/TableView';
import * as AdminActions from '../../../store/actions/adminActons';

const styles = (theme) => ({
	fab: {
		position: 'fixed',
		bottom: '50px',
		right: '50px'
	}
});

const Posts = ({ auth, admin: { posts }, getPosts, classes, ...props }) => {
	const columns = [ { label: 'ID', name: 'id' }, { label: 'Title', name: 'title' } ];

	React.useEffect(
		() => {
			getPosts(auth.token);
		},
		[ auth.token ]
	);

	return (
		<div style={{ padding: '0', margin: '0' }}>
			<h4>Testing Posts</h4>
			<TableView columns={columns} rows={posts} />
			<Fab
				component={RouterLink}
				to="/admin/posts/add"
				color="secondary"
				arial-label="Add"
				className={classes.fab}
			>
				<EditIcon />
			</Fab>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		admin: state.admin
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPosts: (token) => {
			dispatch(AdminActions.getPosts(token));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Posts)));
