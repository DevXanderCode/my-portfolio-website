import * as React from "react";
import { connect } from "react-redux";
import TableView from "../../common/TableView";
import * as AdminActions from "../../../store/actions/adminActons";

const Users = ({ auth, getUsers, admin: { user }, ...props }) => {
  const columns = [
    { label: "ID", name: "id" },
    { label: "Email", name: "email" },
    { label: "Name", name: "name" },
  ];

  React.useEffect(() => {
    getUsers(auth.token);
  }, []);
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <h1> testing Users</h1>
      <TableView columns={columns} rows={user} />
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
    getUsers: (token) => {
      dispatch(AdminActions.getUsers(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
