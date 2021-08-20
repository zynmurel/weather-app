import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  grid:{
       maxWidth: 1200,
      margin :"auto"
     },
    card:{
      textAlign: "center",
        padding: theme.spacing(2)

    }
}))
const CardGrid = () =>{
    const classes = useStyle()
    return (
        <Grid container spacing={2} className = {classes.grid}>
            <Grid item md={4} xs={12}>
                <Card className={classes.card}>Sample Card</Card>
            </Grid>
            <Grid item md={4} xs={12}>
                <Card className={classes.card}>Sample Card</Card>
            </Grid>
            <Grid item md={4} xs={12}>
                <Card className={classes.card}>Sample Card</Card>
            </Grid>
        </Grid>
    )
}

export default CardGrid;