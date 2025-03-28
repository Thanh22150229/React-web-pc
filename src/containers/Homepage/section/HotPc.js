import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./HotPc.scss";
import * as actions from "../../../store/actions";

class HotPc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrPc:[],
    };
   
  }
  componentDidMount(){
    this.props.fetchPc();
  }

  componentDidUpdate(prevProps, prevState, snapSho) {
    if(prevProps.arrPc !== this.props.arrPc){
      this.setState({
        arrPc: this.props.arrPc
      });
    }
  }
  render() {
    let arrProduct = this.state.arrPc;
    console.log("pc",arrProduct)
    return (
      <>
        <div className="hotPc-container">
          <div className=" content">
            <div className="title">PC Bán Chạy</div>
            <div className="see-more">
              <span>
                Xem tất cả <i class="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <div className="slider">
            <Slider {...this.props.settings}>
              {arrProduct && arrProduct.length >0 && arrProduct.map((item,index)=>{
                 let imageBase64 = "";
                 if (item.image) {
                  // Check if the string starts with 'data:image/jpeg;base64,' or similar
                  if (!item.image.startsWith("data:image")) {
                    // Add the appropriate prefix if missing
                    imageBase64 = "data:image/jpeg;base64," + item.image;
                  } else {
                    imageBase64 = item.image; // The Base64 string is already complete
                  }
                }
                 return(
                  <div className="img-customize">
                  <img src={imageBase64}></img>
  
                  <div className="name">{item.title}</div>
                  <div className="price">{item.discount}/VND</div>
                  <div className="discount">{item.price}</div>
                  <button>Thêm vào giỏ hàng</button>
                </div>
                 )
              })}              
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrPc: state.admin.arrPc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPc:() => dispatch(actions.fetchPc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotPc);
