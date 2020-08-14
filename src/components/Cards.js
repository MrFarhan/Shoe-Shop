import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import '../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

export default function Cards() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid container spacing={3} position="relative">
                <Grid item xs>
                    <Card className={classes.root} position="relative">
                        <h6 className="centerText">Mans Shoes - Shoes that reflects personality.</h6>
                        <CardMedia className="card" style={{ height: 0, paddingTop: '56%' }}
                            image={require("../assets/shoe04.jpg")}
                            title="Service Shoes"
                        />
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root} position="relative">
                        <h6 className="centerText">Mans Shoes - Shoes that reflects personality.</h6>
                        <CardMedia className="card" style={{ height: 0, paddingTop: '56%' }}
                            image={require("../assets/shoe05.jpg")}
                            title="Service Shoes"

                        />
                    </Card>
                </Grid>
                <Grid item xs>
                <Card className={classes.root} position="relative">
                        <h6 className="centerText">Mans Shoes - Shoes that reflects personality.</h6>
                        <CardMedia className="card" style={{ height: 0, paddingTop: '56%' }}
                            image={require("../assets/shoe06.jpg")}
                            title="Service Shoes"
                        />
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}
