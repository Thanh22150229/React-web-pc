import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./HotLaptop.scss";
import './HotLaptop.scss'
import * as actions from "../../../store/actions";

class HotLaptop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProduct:[],
    };
   
  }
  componentDidMount(){
    this.props.fetchLaptop();
  }

  componentDidUpdate(prevProps, prevState, snapSho) {
    if(prevProps.arrLaptop !== this.props.arrLaptop){
      this.setState({
        arrProduct: this.props.arrLaptop
      });
    }
  }
  render() {
    let arrProduct = this.state.arrProduct;
    console.log("laptop", arrProduct)
    return (
      <>
        <div className="hotLaptop-container">
          <div className=" content">
            <div className="title">Laptop Bán Chạy</div>
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
    arrLaptop: state.admin.arrLaptop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLaptop:() => dispatch(actions.fetchLaptop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotLaptop);
