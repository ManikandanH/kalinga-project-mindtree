import React from "react";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core/";

import axios from "axios";
import { url } from "../../../../config.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CategorySearch from "../../../../NewActions/CategorySearch/CategorySearch.js";
import categoryInitiated from "../../../../NewActions/CategorySearch/categoryInitiated.js";
import showSnackBar from "../../../../NewActions/SnackBar/showSnackBarAction.js";
import startProgressBar from "../../../../NewActions/ProgressBar/startProgressBarAction.js";
import stopProgressBar from "../../../../NewActions/ProgressBar/stopProgressBarAction.js";

import menuicon from '../../../../assests/menu-button-of-three-horizontal-lines.svg'
class categoryDropDown extends React.Component {
  CategorySelected = category => {
    this.props.startProgressBar();

    this.props.categoryInitiated();
    axios
      .post(`${url}/category`, {
        typeOfProduct: category
      })
      .then(res => {
        this.props.stopProgressBar();
        this.props.CategorySearch(res.data);
      })
      .catch(err => {
        this.props.showSnackBar({
          message: "Error has occured",
          type: "warning"
        });
      });
  };

  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            style={{
              backgroundColor: "rgba(34, 7, 7,0.8)",
              width: "100%",
              height: "40px",
              fontSize: "14px"
            }}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Hidden only={[ "md", "xs","sm"]}>All Products</Hidden>
            <Hidden only={[ "lg", "xl"]}>
                <img src={menuicon} width="20px" height="20px" alt="menu icon"/>
            </Hidden>
          </button>
          <div
            className="dropdown-menu"
            id="dropdmenu"
            style={{ fontSize: "15px" }}
            aria-labelledby="dropdownMenuButton"
          >
            <Link
              to={{ pathname: "/category", search: "?category=Beds" }}
              className="dropdown-item"
            >
              <div
                onClick={() => {
                  this.CategorySelected("Beds");
                }}
              >
                Bed
              </div>
            </Link>
            <Link
              to={{ pathname: "/category", search: "?category=Sofa" }}
              onClick={() => {
                this.CategorySelected("Sofa");
              }}
              className="dropdown-item"
            >
              {" "}
              Sofa
            </Link>
            <Link
              to={{ pathname: "/category", search: "?category=Tables" }}
              onClick={() => {
                this.CategorySelected("Tables");
              }}
              className="dropdown-item"
            >
              Table
            </Link>
            <Link
              to={{ pathname: "/category", search: "?category=Chairs" }}
              onClick={() => {
                this.CategorySelected("Chairs");
              }}
              className="dropdown-item"
            >
              Chair
            </Link>
            <Link
              to={{ pathname: "/category", search: "?category=Dressing Table" }}
              onClick={() => {
                this.CategorySelected("Dressing Table");
              }}
              className="dropdown-item"
            >
              Dressing Table
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function matchdispatchtoProps(dispatch) {
  return bindActionCreators(
    {
      CategorySearch,
      showSnackBar,
      categoryInitiated,
      startProgressBar,
      stopProgressBar
    },
    dispatch
  );
}

export default connect(null, matchdispatchtoProps)(categoryDropDown);
