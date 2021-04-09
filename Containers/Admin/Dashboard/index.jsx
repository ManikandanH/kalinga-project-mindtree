import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import productsIcon from "../../../assests/delivery-packages-on-a-trolley.svg";
import usersIcon from "../../../assests/teamwork.svg";
import sellerIcon from "../../../assests/businessmen.svg";

import ProductStatistics from "./ProductStatistics";
import UserStatistics from "./UserStatistics";
import SalesStatistics from "./SalesStatistics";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchProductStatistics from "../../../NewActions/Admin/Dashboard/fetchProductStatistics.js";
import fetchUserStatisitics from "../../../NewActions/Admin/Dashboard/fetchUserStatistics.js";
import fetchSalesStatistics from "../../../NewActions/Admin/Dashboard/fetchSalesStatistics.js";
import FetchProducts from '../../../Actions/FetchProducts.js'
import fetchSellers from '../../../NewActions/Admin/Seller/fetchSellers.js'


class Dashboard extends React.Component {
    componentWillMount() {
        this.props.fetchUserStatisitics();
        this.props.fetchSalesStatistics();
        this.props.fetchProductStatistics();
        this.props.fetchSellers();
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-md-10">
                        <Paper style={{ margin: "30px 10px", padding: "10px" }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                                style={{ margin: "30px 0px" }}
                                spacing={16}
                            >
                                <Grid
                                    item
                                    xs={8}
                                    md={3}
                                    onClick={() => {
                                        this.props.changeTab(1);
                                    }}
                                    style={{cursor: "pointer"}}
                                >
                                    <Card raised={true}>
                                        <CardContent style={{ textAlign: "center" }}>
                                            <img
                                                src={usersIcon}
                                                alt="User Icon"
                                                width="80px"
                                                height="100px"
                                            />
                                            <Typography variant="display2">
                                                {this.props.admindashboard.userStatistics.reduce(
                                                    (a, b) => b,
                                                    0
                                                )}
                                            </Typography>
                                            <Typography variant="subheading">Users</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={8} md={3}
                                    onClick={() => {
                                        this.props.changeTab(3);
                                    }}
                                    style={{cursor: "pointer"}}>
                                    <Card raised={true}>
                                        <CardContent style={{ textAlign: "center" }}>
                                            <img
                                                src={sellerIcon}
                                                alt="Seller Icon"
                                                width="80px"
                                                height="100px"
                                            />
                                            <Typography variant="display2">
                                                {this.props.adminSeller.pendingSeller.length}
                                            </Typography>
                                            <Typography variant="subheading">
                                                Sellers To Review
                      </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={8} md={3} onClick={() => {
                                        this.props.changeTab(2);
                                        this.props.FetchProducts();
                                    }}
                                    style={{cursor: "pointer"}}>
                                    <Card raised={true}>
                                        <CardContent style={{ textAlign: "center" }}>
                                            <img
                                                src={productsIcon}
                                                alt="Product Icon"
                                                width="80px"
                                                height="100px"
                                            />
                                            <Typography variant="display2">
                                                {this.props.admindashboard.productStatistics.reduce(
                                                    (a, b, index) => {
                                                        if (index < 5)
                                                            return a + b
                                                        else
                                                            return a
                                                    },
                                                    0
                                                )}
                                            </Typography>
                                            <Typography variant="subheading">Products</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} />

                                <Grid
                                    item
                                    xs={8}
                                    md={6}
                                    style={{
                                        textAlign: "center",
                                        marginTop: "45px",
                                        borderBottom: "2px solid black"
                                    }}
                                >
                                    <Typography variant="display1" color="inherit">
                                        Product Statistics
                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <ProductStatistics
                                        productStatistics={
                                            this.props.admindashboard.productStatistics
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={8}
                                    md={4}
                                    style={{
                                        textAlign: "center",
                                        marginTop: "45px",
                                        borderBottom: "2px solid black"
                                    }}
                                >
                                    <Typography variant="display1" color="inherit">
                                        Users Statistics
                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <UserStatistics
                                        userStatistics={this.props.admindashboard.userStatistics}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={8}
                                    md={4}
                                    style={{
                                        textAlign: "center",
                                        marginTop: "45px",
                                        borderBottom: "2px solid black"
                                    }}
                                >
                                    <Typography variant="display1" color="inherit">
                                        Sales Statistics
                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <SalesStatistics
                                        salesStatistics={this.props.admindashboard.salesStatistics}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        admindashboard: state.admindashboardReducer,
        adminSeller: state.adminSellerReducer,
        AllProducts: state.productAdminView
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchProductStatistics,
            FetchProducts,
            fetchSalesStatistics,
            fetchUserStatisitics,
            fetchSellers
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
