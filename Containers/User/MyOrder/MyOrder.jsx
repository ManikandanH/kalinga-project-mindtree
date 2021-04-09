import React from 'react';
import {Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import RatingDialog from './RatingDialog'

import noresult from '../../../assests/no_result.png'

class MyOrder extends React.Component {
    state = {
        ratingdialogopen: false,
        pid:null,
    }
    openratingdialog = () => {
        this.setState({ ratingdialogopen: true })
    }
    ratingdialogclose = () => {
    this.setState({ ratingdialogopen: false });
  }
    render() {
        if (this.props.orderInfo === undefined || this.props.orderLength === 0) {
            return (
                <div >
                <div class="row" style={{marginTop:"80px",fontSize:"26px",color:"silver"}}>
                    <div class="col-md-4 col-xs-6" style={{marginLeft:"30px"}}/>
                    <div class="col-md-5 col-xs-7" >
                <img src={noresult} alt="noresults"/>
                <div><strong>sorry!No order has been made</strong></div>
                </div></div>
                <div style={{marginTop:"180px"}}>
                    </div>       
             </div>
            )
        }
        
        return (
            <div>
                {this.props.user.isuser===false?<Redirect to='/' />:null}
                <center> <h1 style={{fontFamily:"Lato",textDecoration:"underline"}}>My Orders</h1></center>
                {this.props.orderInfo.map((product) =>
                    <div className="container" style={{ paddingTop: "2%" }}>
                                <h6 >OrderID :  {product._id}</h6>
                            <br/>
                        <Paper style={{ boxShadow:"none" }}>
                            {product.Product.map((item) =>
                                     <div className="row">
                                    <div className = "col-md-4">
                                    <CardMedia>
                                                <img src={item.Image} alt="beds" height="200px" style={{ width: "100%",paddingTop:"1%" }} />
                                    </CardMedia>
                                    </div>
                                    <div className = "col-md-5"  >
                                        <br />
                                        <br />
                                    <Typography variant="title" gutterBottom style={{marginLeft:"3%",fontFamily:"Lato"}} >
                                                        {item.Title}
                                    </Typography>
                                    <Typography color="textSecondary" variant="body2" gutterBottom style={{marginLeft:"3%",fontFamily:"Lato"}}>Quantity:{item.quantity}</Typography>
                                    <Typography variant="Title" style={{marginLeft:"3%",fontFamily:"Lato"}} > ₹ {item.price}</Typography>
                                    </div>
                                    <div className = "col-md-3">
                                    <Button variant="contained" color="primary" style={{marginTop:"25%",fontFamily:"Lato"}}
                                    onClick={()=>{this.setState({pid:item.productId});this.openratingdialog()} }>Rate this Product</Button>
                                    </div>
                                   
                                </div>
                                

                            )}
                             <hr />
                            <Card style={{ paddingTop: "1%",boxShadow:"none" }}>
                                <Grid>
                                    <Grid item>
                                        <center>
                                            <Typography style={{ paddingTop: "1%" ,fontFamily:"Lato"}}>
                                                <h5>Total Amount :  {product.totalamount}</h5>
                                                <p>Order on {product.date.substring(0, 10)}</p>
                                            </Typography>
                                        </center>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Paper>
                        <RatingDialog  open={this.state.ratingdialogopen} close={this.ratingdialogclose} pid={this.state.pid}/>
                    </div>
                )
                }
                <div className="container">
                </div>
            </div>
           
        );
    }
}
export default MyOrder;