import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
  }

  openNav = () => {
    this.setState({ sidebarOpen: true });
  };

  closeNav = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    const { processLogout } = this.props;
    const { sidebarOpen } = this.state;
    let {userInfo} = this.props;
    return (
      <>
        {/* Sidebar */}
        <div
          id="mySidebar"
          className="sidebar"
          style={{
            width: sidebarOpen ? "250px" : "0",
            transition: "0.3s",
          }}
        >
          <div className="name">
            <span><i class="fas fa-smile"></i>{userInfo.data.firstName} {userInfo.data.lastName}</span> 
            <a href="#" className="closebtn" onClick={this.closeNav}>
              ×
            </a>
          </div>

          <Link to="/system/laptop" className="link">
          Sản phẩm
          </Link>
          <Link to="/system/manage-user" className="link">
            Quản lý người dùng
          </Link>
         
          <div
            className="btn-login link"
            onClick={processLogout}
            title="Log in"
          >
           <i class='fas fa-sign-out-alt'></i>

            Đăng xuất
          </div>
        </div>

        {/* Main content */}
        <div
          id="main"
          style={{
            marginLeft: sidebarOpen ? "250px" : "0",
            transition: "0.3s",
          }}
        >
          <button className="openbtn" onClick={this.openNav}>
            ☰
          </button>
        </div>

        {/* Logout button */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin : state.user.isLoggedIn,
    userInfo: state.user.userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return { processLogout: () => dispatch(actions.processLogout()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
