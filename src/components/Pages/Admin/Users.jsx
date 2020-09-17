import * as React from "react";
import TableView from "../../common/TableView";

const Users = (props) => {
  const columns = [
    { label: "ID", name: "id" },
    { label: "Email", name: "email" },
    { label: "Name", name: "name" },
  ];

  return (
    <div style={{ padding: "0", margin: "0" }}>
      <h1> testing Users</h1>
      <TableView columns={columns} rows={[]} />
    </div>
  );
};

export default Users;
