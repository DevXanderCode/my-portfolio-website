import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as SiteActions from "../../store/actions/siteActions";

const SinglePortfolio = ({ title, subtitle, image, modalLink, setPostData,postImage, ...props }) => {
    return(
        <div className="col-md-4 col-sm-6 portfolio-item">
            <Link className="portfolio-link"  to={`${modalLink}`} onClick={e => setPostData({title, subtitle, image, postImage})}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                <img className="img-fluid w-100" src={image} alt="" />
            </Link>
            <div className="portfolio-caption">
                <h4>{title}</h4>
                <p className="text-muted">{subtitle}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    setPostData: (post) => {
        dispatch(SiteActions.setPostData(post));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SinglePortfolio));