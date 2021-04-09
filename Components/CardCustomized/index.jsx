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
        <Card id="card" className="cardTrasform" onClick={()=>props.onClickCallback}>
            <CardMedia id="cardmedia"
                component="img"
                height="300"
                width="180"
                image={props.product.Image}
            />

            <h4  style={{fontFamily:"Lato,sans-serif",marginLeft:"22px",color:"black"}}>
            <strong>{props.product.Title}</strong></h4>
            <br/>
            <p  style={{fontSize:"15px",color:"#1d3b48",marginLeft:"22px"}}>
             ₹<strong>  {(props.product.amount).toFixed(2)} </strong><span style={{fontSize:"12px"}}> <del >  ₹ {(props.product.amount*1.2).toFixed(2)}</del></span>
            </p>
            <p style={{color:"silver",marginLeft:"20px"}}> Save ₹{(0.2*props.product.amount).toFixed(2)}<span style={{color:"red",marginLeft:"3px"}}>(20%off)</span> </p>

           

            {props.actions ? props.actions.map(action => {
                return (
                    <CardActions>
                        <Button size="medium" variant="outlined" color={action.color} fullWidth
                            onClick={action.actionCallback} >
                            {action.actionTitle}
                        </Button>
                    </CardActions>)
            }) : null}
        </Card>

    );
}

export default cardCustomized;