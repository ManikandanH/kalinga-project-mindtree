import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const expansionPanelCustomized = (props) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} md zeroMinWidth style={{margin:"5px"}}>
                <Typography noWrap>{props.summary1}</Typography>
                </Grid>
                <Grid item xs={12} md zeroMinWidth  style={{margin:"5px"}}>
                <Typography noWrap>{props.summary2}</Typography>
                </Grid>
                <Grid item />
            </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {props.children}
                </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
                {props.actions ?props.actions.map((item,index)=> {
                    return(
                    <Button size="medium" variant="outlined" color={item.color}
                        onClick={item.actionCallback} key={index}>
                        {item.actionTitle}
        </Button>)
                }):null}
            </ExpansionPanelActions>
        </ExpansionPanel>
    )

}
export default expansionPanelCustomized;