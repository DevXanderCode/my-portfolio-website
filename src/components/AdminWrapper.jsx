import React from "react";

const AdminWrapper = (props) => {
    return (
        <div id="admin-page" style={{backgroundColor: "#eee", minHeight: "100vh"}}>
            {props.children}
        </div>
    );
}

export default AdminWrapper;