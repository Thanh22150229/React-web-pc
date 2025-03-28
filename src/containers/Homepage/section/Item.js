import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./Item.scss";
import section3 from "../../../assets/section/section3.webp";
import './Item.scss'
import * as actions from "../../../store/actions";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProduct:[],
    };
   
  }
  componentDidMount(){
    this.props.fetchItem();
  }

  componentDidUpdate(prevProps, prevState, snapSho) {
    if(prevProps.arrItem !== this.props.arrItem){
      this.setState({
        arrProduct: this.props.arrItem
      });
    }
  }
  render() {
    let arrProduct = this.state.arrProduct;
    return (
      <>
        <div className="item-container">
          <div className=" content">
            <div className="title">Linh kiện </div>
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
    arrItem: state.admin.arrItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem:() => dispatch(actions.fetchItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
