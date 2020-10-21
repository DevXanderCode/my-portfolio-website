import * as React from "react";
import { connect } from "react-redux";
import API from "../../utils/api";
import Header from "../common/Header";

const Single = ({ site: {post: {title, subtitle, postImage}},...props}) => {
    return (
        <div>
            <Header subtitle={title} image={postImage.length > 0 && API.makeFileUrl(postImage[0].url, null)} showButton={false} />
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