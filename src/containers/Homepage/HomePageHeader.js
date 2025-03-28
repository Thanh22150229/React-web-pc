import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePageHeader.scss";
import { Link, Navigate } from "react-router-dom";
import * as actions from "../../store/actions";

class HomePageHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { processLogout } = this.props;
    return (
      <>
        <div className="header-container">
          <div className="content-up ">
            <div className="row">
              <div className="col-2 logo">
                <i class="fab fa-pied-piper-alt"></i>
                <span>LOGGOO</span>
              </div>
              <div className="col-4 search">
                <input type="text" name="search" placeholder="Search..." />
                <span class="searchbar-icon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <div className="col-2 cart">
                <i class="fas fa-shopping-basket"></i>
                <span>Giỏ hàng</span>
              </div>
              <div className="col-2 login">
                <i class="fas fa-user"></i>
                {this.props.isLoggedIn ? (
                  <span onClick={processLogout}>Đăng xuất</span>
                ) : (
                  <Link to="/login">Đăng nhập</Link>
                )}
              </div>
              <div className="col-2 welcome">
                <span>How you been</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageHeader);
