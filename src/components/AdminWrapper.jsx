import React from "react";

const AdminWrapper = (props) => {
  return (
    <div
      id='admin-page'
      style={{
        display: "flex",
        // backgroundColor: "#eee",
        minHeight: "100%",
        //   // paddingTop: "6rem",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "center",
        verticalAlign: "middle",
      }}
    >
      {props.children}
    </div>
  );
};

export default AdminWrapper;
