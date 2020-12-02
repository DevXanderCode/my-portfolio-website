import * as React from "react";

const LoginWrapper = (props) => {
  return (
    <div
      id='login-page'
      style={{
        display: "flex",
        minHeight: "100%",
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

export default LoginWrapper;
