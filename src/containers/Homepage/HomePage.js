import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageHeader from "./HomePageHeader";
import HomePageBanner from "./HomePageBanner";
import HotPc from "./section/HotPc";
import HotLaptop from "./section/HotLaptop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.scss'
import MouseAndKey from "./section/MouseAndKey";
import Item from "./section/Item";
import Printer from "./section/Printer";
import Category from "./Category";
import HomePageFooter from "./HomePageFooter";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    
    };
    return (
      <>
      <div className="homepage">
        <HomePageHeader />
        <HomePageBanner />
        <HotPc settings={settings}/>
        <HotLaptop settings={settings}/>
        <Category/>
        <MouseAndKey settings={settings}/>
        <Item settings={settings}/>
        <Printer settings={settings}/>
        <HomePageFooter/>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
