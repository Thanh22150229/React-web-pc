import React, { Component } from "react";
import { connect } from "react-redux";
import "./Product.scss";
import * as actions from "../../../store/actions";
import { CRUD_ACTION } from "../../../utils/constant";
import ReactPaginate from "react-paginate";
import CommonUtils from "../../../utils/CommonUtils";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";


class ManageLaptop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrStatus: [],
      arrBrand: [],
      arrCategory: [],
      arrProduct: [],
      totalPage: 0,
      currentPage: 1,
      currentLimit: 8,

      previewImg: "",
      isPreviewOpen: false,

      //search
      searchContent: "",
      arrSearchProduct: [],
      isSearch: false,

      //product info
      nameProduct: "",
      price: "",
      discount: "",
      brandId: "",
      statusId: "",
      categoryId: "",
      image: "",
      action: "",
      editProductId: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllProduct(this.state.currentPage, this.state.currentLimit);
    this.props.fetchBrandId();
    this.props.fetchStatusProductId();
    this.props.fetchCategoryId();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    // Update the product list only if it has changed
    if (prevProps.products !== this.props.products) {
      // if (JSON.stringify(this.props.products) !== JSON.stringify(this.state.arrProduct)) {
      this.setState({
        nameProduct: "",
        price: "",
        discount: "",
        brandId: "",
        statusId: "",
        categoryId: "",
        image: "",
        previewImg: "",
        arrSearchProduct: "",
        isSearch: false,
        action: CRUD_ACTION.CREATE,
        arrProduct: this.props.products,
        totalPage: this.props.totalPages,
      });
      //}
    }

    if (prevProps.brandId !== this.props.brandId) {
      let arrBrand = this.props.brandId;
      this.setState({
        arrBrand: arrBrand,
        brandId: arrBrand[0].key_map,
      });
    }

    if (prevProps.categoryId !== this.props.categoryId) {
      let arrCategory = this.props.categoryId;
      this.setState({
        arrCategory: arrCategory,
        categoryId: arrCategory[0].key_map,
      });
    }

    if (
      prevProps.statusProduct !== this.props.statusProduct &&
      this.props.statusProduct.length > 0
    ) {
      let arrStatus = this.props.statusProduct;
      this.setState({
        arrStatus: arrStatus,
        statusId: arrStatus[0].key_map,
      });
    }
  }

  checkValidate = () => {
    let isValid = true;
    let arrInput = ["nameProduct", "price", "discount"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Input is require " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  handlePageClick = (event) => {
    const currentPage = +event.selected + 1;
    this.setState(
      {
        currentPage: currentPage,
      },
      () => {
        this.props.fetchAllProduct(
          this.state.currentPage,
          this.state.currentLimit
        );
      }
    );
  };

  handleOnclickCreateProduct = () => {
    let validate = this.checkValidate();
    if (validate === false) return;
    if (this.state.action === CRUD_ACTION.CREATE) {
      this.props.createProduct(
        {
          title: this.state.nameProduct,
          price: this.state.price,
          discount: this.state.discount,
          brand: this.state.brandId,
          status: this.state.statusId,
          category: this.state.categoryId,
          image: this.state.image,
        },
        this.state.currentPage,
        this.state.currentLimit
      );
    } else {
      this.props.updateProduct(
        {
          id: this.state.editProductId,
          title: this.state.nameProduct,
          price: this.state.price,
          discount: this.state.discount,
          brand: this.state.brandId,
          status: this.state.statusId,
          category: this.state.categoryId,
          image: this.state.image,
        },
        this.state.currentPage,
        this.state.currentLimit
      );
    }
  };

  handleEditProduct = (product) => {
    let imageBase64 = "";
    if (product.image) {
      if (!product.image.startsWith("data:image")) {
        // Add the appropriate prefix if missing
        imageBase64 = "data:image/jpeg;base64," + product.image;
      } else {
        imageBase64 = product.image;
      }
    }
    this.setState({
      nameProduct: product.title,
      price: product.price,
      discount: product.discount,
      brandId: product.brand,
      statusId: product.status,
      categoryId: product.category,
      image: imageBase64,
      previewImg: imageBase64,
      action: CRUD_ACTION.EDIT,
      editProductId: product.id,
    });
  };

  handleDeleteProduct = (id) => {
    this.props.deleteProduct(
      id,
      this.state.currentPage,
      this.state.currentLimit
    );
  };
  handleOnchangePreviewImg = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      let base64 = await CommonUtils.getBase64(file);
      // console.log("base 64: ", base64)
      this.setState({
        previewImg: objectUrl,
        image: base64,
      });
    }
  };

  handlePreviewOpen = () => {
    this.setState({
      isPreviewOpen: true,
    });
  };

  handleSearch = () => {
    const filter = this.state.arrProduct.filter((product) =>
      product.title
        .toLowerCase()
        .includes(this.state.searchContent.toLowerCase())
    );

    this.setState({
      arrSearchProduct: filter,
      isSearch: true,
    });
  };
  render() {
    console.log("search", this.state.arrSearchProduct);
    let statuses = this.state.arrStatus;
    let brands = this.state.arrBrand;
    let categories = this.state.arrCategory;
    let arrProduct = this.state.arrProduct;
    let arrSearch = this.state.arrSearchProduct;
    let {
      nameProduct,
      price,
      discount,
      brandId,
      statusId,
      categoryId,
      action,
    } = this.state;
    console.log("check data", brandId, statusId, categoryId);
    return (
      <React.Fragment>
        <div className="title">Danh sách sản phẩm</div>
        <div className="col-2 logo">
          <i class="fab fa-pied-piper-alt"></i>
          <span>LOGO</span>
        </div>
        <div className="container search">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control input-search"
                placeholder="Search..."
                onChange={(event) => {
                  this.handleOnchangeInput(event, "searchContent");
                }}
              />
            </div>

            <div className="col-2">
              <button
                className="btn-search"
                onClick={() => {
                  this.handleSearch();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="frm-input container">
          <div className="row">
            <div className="col-4 form-group mt-3">
              <label>Tên sản phẩm</label>
              <input
                type="text"
                className="form-control"
                value={nameProduct}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "nameProduct");
                }}
              />
            </div>
            <div className="col-4 form-group mt-3">
              <label>Giá</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "price");
                }}
              />
            </div>
            <div className="col-4 form-group mt-3">
              <label>Giá giảm</label>
              <input
                type="number"
                className="form-control"
                value={discount}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "discount");
                }}
              />
            </div>
            <div className="col-4 form-group mt-3">
              <label>Thương hiệu</label>
              <select
                className="form-control"
                value={brandId}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "brandId");
                }}
              >
                   <option value="" hidden >Vui lòng chọn</option>
                {brands &&
                  brands.length > 0 &&
                  brands.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.value}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="col-4 form-group mt-3">
              <label>Trạng thái</label>
              <select
                className="form-control"
                value={statusId}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "statusId");
                }}
              >
                {statuses &&
                  statuses.length > 0 &&
                  statuses.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.value}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="col-4 form-group mt-3">
              <label>Loại sản phẩm</label>
              <select
                className="form-control"
                value={categoryId}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "categoryId");
                }}
              >
                <option value="" hidden >Vui lòng chọn</option>
                {categories &&
                  categories.length > 0 &&
                  categories.map((item, index) => {
                    return (
                      <option key={index} value={item.key_map}>
                        {item.value}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="col-3 mt-3 mb-5 upload-image">
            <label>Hình ảnh</label>
            <div className="image">
              <input
                id="upload"
                type="file"
                className="form-control"
                hidden
                onChange={(event) => {
                  this.handleOnchangePreviewImg(event);
                }}
              />
              <div
                className="preview-img"
                style={{ backgroundImage: `url(${this.state.previewImg})` }}
                onClick={() => {
                  this.handlePreviewOpen();
                }}
              ></div>
              <label htmlFor="upload" className="upload-btn">
                Tải ảnh<i className="fas fa-upload"></i>
              </label>
            </div>
          </div>
          <button
            className={action === CRUD_ACTION.CREATE ? "btn-save" : "btn-edit"}
            onClick={() => {
              this.handleOnclickCreateProduct();
            }}
          >
            Lưu
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Thương hiệu </th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.isSearch === true
              ? arrSearch.length > 0 &&
                arrSearch.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.price}VND</td>
                      <td>{item.brand}</td>
                      <td>{item.status}</td>
                      <td>
                        <i
                          class="fas fa-pencil-alt edit"
                          onClick={() => {
                            this.handleEditProduct(item);
                          }}
                        ></i>
                        <i
                          class="fas fa-trash delete"
                          onClick={() => {
                            this.handleDeleteProduct(item.id);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })
              : arrProduct &&
                arrProduct.length > 0 &&
                arrProduct.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.price}VND</td>
                      <td>{item.brand}</td>
                      <td>{item.status}</td>
                      <td>
                        <i
                          class="fas fa-pencil-alt edit"
                          onClick={() => {
                            this.handleEditProduct(item);
                          }}
                        ></i>
                        <i
                          class="fas fa-trash delete"
                          onClick={() => {
                            this.handleDeleteProduct(item.id);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            {}
          </tbody>
        </table>
        {this.state.totalPage > 0 && (
          <div className="footer">
            <ReactPaginate
              nextLabel=" >"
              onPageChange={(e) => {
                this.handlePageClick(e);
              }}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={this.state.totalPage}
              previousLabel="< "
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        )}
       
         {this.state.isPreviewOpen && (
        <Lightbox
          open={this.state.isPreviewOpen}
          close={() => this.setState({ isPreviewOpen: false })}
          slides={[{ src: this.state.previewImg }]}
        />
      )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    statusProduct: state.admin.statusProductIds,
    brandId: state.admin.brandIds,
    categoryId: state.admin.categoryIds,
    products: state.admin.products,
    totalPages: state.admin.totalPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProduct: (page, limit) =>
      dispatch(actions.fetchAllProduct(page, limit)),
    fetchHotId: () => dispatch(actions.fetchHotId()),
    fetchBrandId: () => dispatch(actions.fetchBrandId()),
    fetchStatusProductId: () => dispatch(actions.fetchStatusProductId()),
    fetchCategoryId: () => dispatch(actions.fetchCategoryId()),
    createProduct: (data, page, limit) =>
      dispatch(actions.createProduct(data, page, limit)),
    deleteProduct: (id, page, limit) =>
      dispatch(actions.deleteProduct(id, page, limit)),
    updateProduct: (data, page, limit) =>
      dispatch(actions.updateProduct(data, page, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLaptop);
