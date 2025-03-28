import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import './MouseAndKey.scss'
import * as actions from "../../../store/actions";

class MouseAndKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProduct:[],
    };
   
  }
  componentDidMount(){
    this.props.fetchMouse();
  }

  componentDidUpdate(prevProps, prevState, snapSho) {
    if(prevProps.arrMouse !== this.props.arrMouse){
      this.setState({
        arrProduct: this.props.arrMouse
      });
    }
  }
  render() {
    let arrProduct = this.state.arrProduct;
    console.log("mouse", arrProduct)
    return (
      <>
        <div className="mouseAndKey-container">
          <div className=" content">
            <div className="title">Chuột, Bàn Phím</div>
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
    arrMouse: state.admin.arrMouse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMouse:() => dispatch(actions.fetchMouse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MouseAndKey);
