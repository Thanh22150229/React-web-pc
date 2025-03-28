import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./Printer.scss";
import section3 from "../../../assets/section/section3.webp";
import './Printer.scss'

class Printer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="printer-container">
          <div className=" content">
            <div className="title">Máy in</div>
            <div className="see-more">
              <span>
                Xem tất cả <i class="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <div className="slider">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <img src={section3}></img>

                <div className="name">Thùng máy NZXH7</div>
                <div className="price">4.399.000</div>
                <div className="discount">5.000.000</div>
                <button>Thêm vào giỏ hàng</button>
              </div>
              <div className="img-customize">
                <img src={section3}></img>
                <div className="name">Thùng máy NZXH7</div>
                <div className="price">4.399.000</div>
                <div className="discount">5.000.000</div>
                <button>Thêm vào giỏ hàng</button>
              </div>
              <div className="img-customize">
                <img src={section3}></img>
                <div className="name">Thùng máy NZXH7</div>
                <div className="price">4.399.000</div>
                <div className="discount">5.000.000</div>
                <button>Thêm vào giỏ hàng</button>
              </div>
              <div className="img-customize">
                <img src={section3}></img>
                <div className="name">Thùng máy NZXH7</div>
                <div className="price">4.399.000</div>
                <div className="discount">5.000.000</div>
                <button>Thêm vào giỏ hàng</button>
              </div>
              <div className="img-customize">
                <img src={section3}></img>
                <div className="name">Thùng máy NZXH7</div>
                <div className="price">4.399.000</div>
                <div className="discount">5.000.000</div>
                <button>Thêm vào giỏ hàng</button>
              </div>
              <div className="img-customize">
                <img src={section3}></img>
                <div className="name">Thùng máy NZXH7</div>
                <div className="price">4.399.000</div>
                <div className="discount">5.000.000</div>
                <button>Thêm vào giỏ hàng</button>
              </div>
            </Slider>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Printer);
