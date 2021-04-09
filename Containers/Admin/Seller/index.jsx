import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchSellers from '../../../NewActions/Admin/Seller/fetchSellers.js'
import ApprovedSeller from './ApprovedSeller/index1'
import PendingSeller from './PendingSeller/index1'
import RejectedSeller from './RejectedSeller/index1'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import './index.css'
import approvedSellerIcon from '../../../assests/approvedSeller.svg'
import pendingSellerIcon from '../../../assests/pendingSeller.svg'
import rejectedSellerIcon from '../../../assests/rejectedSeller.svg'
class Seller extends React.Component {
    state = {
        search: ""
    }
    componentWillMount() {
        this.props.fetchSellers();
    }
    render() {
        return (
            <div className="container-fluid" >
                <div className="row justify-content-center">
                    <div className="col col-md-10" >
                        <Paper style={{ margin: "30px 10px",padding: "10px"}}>
                        <Grid container direction="row" justify="space-around" alignItems="center" style={{ margin: "30px 0px" }}
                            spacing={16}>
                            <Grid item xs={8} md={3}>
                                <Card raised={true}>
                                    <CardContent style={{ textAlign: "center" }}>
                                        <img src={pendingSellerIcon} alt="Pending Seller"
                                            width="80px" height="100px"
                                        />
                                        <Typography variant="display2">
                                            {this.props.adminSeller.pendingSeller.length}</Typography>
                                        <Typography variant="subheading">Pending Seller</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={8} md={3}>
                                <Card raised={true}>
                                    <CardContent style={{ textAlign: "center" }}>
                                        <img src={approvedSellerIcon} alt="Approved Seller"
                                            width="80px" height="100px"
                                           />
                                        <Typography variant="display2">
                                            {this.props.adminSeller.approvedSeller.length}</Typography>
                                        <Typography variant="subheading">Approved Seller</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={8} md={3}>
                                <Card raised={true}>
                                    <CardContent style={{ textAlign: "center" }}>
                                        <img src={rejectedSellerIcon} alt="Rejected Seller"
                                            width="80px" height="100px"
                                             />
                                        <Typography variant="display2">
                                            {this.props.adminSeller.rejectedSeller.length}</Typography>
                                        <Typography variant="subheading">Rejected Seller</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Search" fullWidth
                                    onChange={(event) => { this.setState({ search: event.target.value }) }} />
                            </Grid>


                            <Grid item xs={10} md={8}>

                                <Typography className="heading" variant="headline">Pending Seller</Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <PendingSeller search={this.state.search} />
                            </Grid>
                            <Grid item xs={10} md={8}>
                                <Typography className="heading" style={{ marginTop: "50px" }} variant="headline">
                                    Approved Seller</Typography>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <ApprovedSeller search={this.state.search} />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography className="heading" style={{ marginTop: "50px" }} variant="headline">Rejected Seller</Typography>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <RejectedSeller search={this.state.search} />
                            </Grid>

                        </Grid>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        adminSeller: state.adminSellerReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSellers }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Seller);
