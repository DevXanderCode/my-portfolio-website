import React from "react";

const AdminWrapper = (props) => {
    return (
        <div id="admin-page" style={{backgroundColor: "#eee", minHeight: "100vh", paddingTop: "6rem"}}>
            {props.children}
        </div>
    );
}

export default AdminWrapper;