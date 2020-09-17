import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TableView from "../../common/TableView";
import * as AdminActions from "../../../store/actions/adminActons";

const Posts = (props) => {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <h4>Testing Posts</h4>
      <TableView columns={[]} rows={[]} />
    </div>
  );
};

export default withRouter(Posts);
