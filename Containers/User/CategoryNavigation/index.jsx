import React from 'react'
import chairIcon from '../../../assests/armchair1.svg'
import bedIcon from '../../../assests/bed1.svg'
import tableIcon from '../../../assests/desk1.svg'
import dressingTableIcon from '../../../assests/dresser1.svg'
import sofaIcon from '../../../assests/sofa1.svg'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import './index.css'
import {NavLink } from 'react-router-dom'



const categoryNavigation = (props) => {
    return (

        <Grid container direction="row" justify="space-around" alignItems="center" className="headings"
            style={{ margin: "1% 0px", background: "white", padding: "80px 5px" }}>
            <Grid item xs={12} style={{
                textAlign: "center", marginBottom: "40px",
            }}>
                <Typography variant="display2" style={{ textAlign: "center", marginBottom: "40px", color: "rgba(34, 7, 7, 0.8)", fontFamily: "Sofia" }}>
                    <p><u>Explore Our Furniture Range</u></p>
                </Typography>
            </Grid>
            <Grid item md={1} />
            <Grid item md={2} xs={4} style={{ textAlign: "center" }}>
                <NavLink to={{ pathname: '/category', search: "?category=Chairs" }}>
                    <img src={chairIcon} alt="chair" className="svgIcons" style={{ marginBottom: "10px",marginTop:"40px" }} />
                    <br />
                    <i>Chair</i>
                </NavLink>
            </Grid>
            <Grid item md={2} xs={4} style={{ textAlign: "center" }}>
                <NavLink to={{ pathname: '/category', search: "?category=Tables" }}>
                    <img src={tableIcon} alt="table" className="svgIcons" style={{marginBottom: "10px",marginTop:"40px" }} />
                    <br />
                    <i>Table</i>
                </NavLink>
            </Grid>
            <Grid item md={2} xs={4} style={{ textAlign: "center" }}>
                <NavLink to={{ pathname: '/category', search: "?category=Beds" }}>
                    <img src={bedIcon} alt="bed" className="svgIcons" style={{ marginBottom: "10px",marginTop:"40px" }} />
                    <br />
                    <i>Bed</i>
                </NavLink>
            </Grid>
            {/* <Grid item xs={12}>
                <div style={{ height: "100px" }}></div>
            </Grid>
            <Grid item md={2} /> */}
            <Grid item md={2} xs={4} style={{ textAlign: "center" }}>
                <NavLink to={{ pathname: '/category', search: "?category=Sofa" }}>
                    <img src={sofaIcon} alt="sofa" className="svgIcons" style={{ marginBottom: "10px",marginTop:"40px" }} />
                    <br />
                    <i>Sofa</i>
                </NavLink>
            </Grid>
            <Grid item md={2} xs={4} style={{ textAlign: "center" }}>
                <NavLink to={{ pathname: '/category', search: "?category=Dressing Table" }}>
                    <img src={dressingTableIcon} alt="dressingtable" className="svgIcons" style={{ marginBottom: "10px",marginTop:"40px"}} />
                    <br />
                    <i>Dressing Table</i>
                </NavLink>
            </Grid>
            <Grid item md={1} />
        </Grid>
    )
}
export default categoryNavigation;