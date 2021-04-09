import React from 'react';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './index.css'
//import ReactStars from 'react-stars'

const cardCustomized = (props) => {
    return (
        <Card id="card" className="cardTrasform" style={{height:"410px"}}>
            <CardMedia id="cardmedia"
                component="img"
                height="230"
                width="180"
                image={props.product.Image}
            />

            <h4  style={{fontFamily:"Lato,sans-serif",marginLeft:"22px",color:"black"}}>
            <strong>{props.product.Title}</strong></h4>
            
            <h5  style={{fontFamily:"Lato,sans-serif",marginLeft:"22px",color:"#828282"}}>
            {props.product.SellerId}</h5>
           
            <p  style={{fontSize:"15px",color:"#1d3b48",marginLeft:"22px"}}>
             ₹<strong>  {(props.product.amount).toFixed(2)} </strong><span style={{fontSize:"12px"}}> </span>
            </p>
           
            <CardActions>

            {props.actions ? props.actions.map(action => {
                return (
                    
                        <Button size="medium"  color={action.color} fullWidth
                            onClick={action.actionCallback} >
                            {action.actionTitle}
                        </Button>
                    )
            }) : null}
            </CardActions>
        </Card>

    );
}

export default cardCustomized;