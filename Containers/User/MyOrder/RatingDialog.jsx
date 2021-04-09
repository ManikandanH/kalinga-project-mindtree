import React from 'react';
import {
    Dialog, DialogContent,
    DialogTitle, Button
} from '@material-ui/core/';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import RatingandFeedack from '../../../NewActions/RatingandFeedback/RatingandFeedback.js'
import ReactStars from 'react-stars'

class RatingFeedback extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 0.5,

        };
    }
    ratingChanged = (newRating) => {
        this.setState({ rating: newRating })
    }
    handleSubmit = (pid, name, rating, feedback, uid) => {
        this.props.RatingandFeedack(pid, name, rating, feedback, uid);
        this.props.close();
    }


    render() {
        const { rating } = this.state;

        return (

            <div className="row" >

                <Dialog maxWidth="none" open={this.props.open} onClose={this.props.close} aria-labelledby="form-dialog-title" >
                    {/* <div style={{ width: "950px", height: "550px" }}> */}
                    <DialogTitle id="form-dialog-title" style={{ backgroundColor: "#3075e5" }}>Rate And Review This Product</DialogTitle>

                    <DialogContent>
                        <div >
                            <ReactStars
                                count={5}
                                onChange={this.ratingChanged}
                                size={45}
                                value={rating}
                                color2={'#ffd700'} />
                        </div>
                        <textarea rows="8" className="form-control" placeholder="Enter Feedback.."
                            onChange={(event) => { this.feedback = event.target.value }}
                            style={{ fontSize: "17px" }} />
                        <div className="row justify-content-around" >

                            <div style={{ marginLeft: "10px" }} className="col-xs-6" >
                                <Button variant="contained" color="primary" style={{ marginTop: "40px", height: "50%", width: "100px" }}
                                    onClick={() => {
                                        this.handleSubmit((this.props.pid), (JSON.parse(sessionStorage.getItem('userdetails'))).name, rating, this.feedback, (JSON.parse(sessionStorage.getItem('userdetails'))).uid)
                                            ; this.setState({ rating: 0.5 })
                                    }} >
                                    Submit
                                     </Button>
                            </div>

                            <div style={{ marginLeft: "10px" }} className="col-xs-6">
                                <Button variant="contained" color="primary" style={{ marginTop: "40px", height: "50%", width: "100px" }}
                                    onClick={this.props.close} >
                                    Cancel
                        </Button>
                            </div>
                        </div>
                    </DialogContent>
                    {/* </div> */}
                </Dialog>


            </div>
        )
    }
}


function mapdispatchtoprops(dispatch) {
    return bindActionCreators({
        RatingandFeedack: RatingandFeedack
    }, dispatch)
}
export default connect(null, mapdispatchtoprops)(RatingFeedback)
