import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TableView from "../../common/TableView";
import * as AdminActions from "../../../store/actions/adminActons";

const Posts = ({ auth, admin: { posts }, getPosts, ...props }) => {
  const columns = [
    { label: "ID", name: "id" },
    { label: "Title", name: "title" },
  ];

  React.useEffect(() => {
    getPosts(auth.token);
  }, []);

  return (
    <div style={{ padding: "0", margin: "0" }}>
      <h4>Testing Posts</h4>
      {console.log("post", posts)}
      <TableView columns={columns} rows={posts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (token) => {
      dispatch(AdminActions.getPosts(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Posts));
