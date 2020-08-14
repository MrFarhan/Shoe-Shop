import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../App.css'
import IMG from '../assets/shoe02.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Cards() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={classes.root} >
            <Grid container spacing={3} position="relative">
                <Grid item xs>
                    {/* <Paper className={classes.paper} className="card">xs</Paper> */}

                    <Card className={classes.root} position="relative">
                        <h6 className="centerText">Mans Shoes - Shoes that reflects personality.</h6>
                        <CardMedia className="card" style={{ height: 0, paddingTop: '56%' }}
                            image={require("../assets/shoe04.jpg")}
                            title="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.root} position="relative">
                        <h6 className="centerText">Mans Shoes - Shoes that reflects personality.</h6>
                        <CardMedia className="card" style={{ height: 0, paddingTop: '56%' }}
                            image={require("../assets/shoe05.jpg")}
                            title="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item xs>
                <Card className={classes.root} position="relative">
                        <h6 className="centerText">Mans Shoes - Shoes that reflects personality.</h6>
                        <CardMedia className="card" style={{ height: 0, paddingTop: '56%' }}
                            image={require("../assets/shoe06.jpg")}
                            title="Paella dish"
                        />
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}
