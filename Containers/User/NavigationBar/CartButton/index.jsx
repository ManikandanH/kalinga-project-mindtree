import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography, Badge } from '@material-ui/core/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom'
import cartProduct from '../../../../NewActions/CartProduct/CartProduct';
import showSnackBar from '../../../../NewActions/SnackBar/showSnackBarAction.js'


class cartButton extends React.Component {
    constructor(props) {
        super();
        this.state = {

            navlinks: false
        }
    }

    click = () => {
        if (this.props.SignedIn.isuser === true) {
            this.props.cartProduct(this.props.SignedIn.uid);
        }
        else {
            this.props.showSnackBar({
                message: "You must login",
                type: "error"
            })

        }
    }
    render() {
        return (
            <div>
                <NavLink to='/cart' >
                    {this.props.SignedIn.length<0?<Badge color="secondary"
                        badgeContent={0}
                        onClick={this.click} style={{ width: "60px" }}>
                        <Typography>
                            <ShoppingCartIcon
                                style={{ color: "rgba(34, 7, 7,0.8)", width: "90px", fontSize: "40px" }} />
                        </Typography>
                    </Badge>:<Badge color="secondary"
                        badgeContent={this.props.SignedIn.length}
                        onClick={this.click} style={{ width: "60px" }}>
                        <Typography>
                            <ShoppingCartIcon
                                style={{ color: "rgba(34, 7, 7,0.8)", width: "90px", fontSize: "40px" }} />
                        </Typography>
                    </Badge>}
                </NavLink>
            </div>

        )
    }
}

function mapstatetoprops(state) {
    return {
        SignedIn: state.Sign,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ cartProduct, showSnackBar }, dispatch)
}

export default connect(mapstatetoprops, matchDispatchToProps)(cartButton); 