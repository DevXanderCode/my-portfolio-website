import * as React from "react";
import { connect } from "react-redux";

const Single = (props) => {
    return (
        <div>
            <h6> Hello from the single component</h6>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    site: state.site
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Single);