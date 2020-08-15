import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from "react-router-dom";


import "../App.css";
import App from '../App';
import { MenShoesDetails } from './MenShoesDetails';
import { MensShoesIndex } from './MensShoesIndex';
import { MenShoes } from './MenShoes';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        backgroundColor: "red",
    },

    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },

    title: {
        display: 'none',
        color: "black",
        padding: "0.7em",
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textDecoration: 'none',
        '&:hover': {
            color: 'red',
        },

    },

    logo: {
        margin: 0,
        justifyContent: "center",
        alignItem: "center",
        marginLeft: "10em",
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.grow}>
                <AppBar position="flex" style={{ backgroundColor: "white" }}>
                    <Toolbar >
                        <Typography className={classes.title} variant="h6" >
                            <Link to="/" > Home</Link>
                        </Typography>
                        <div className="dropdown">
                            <Typography className="dropbtn" className={classes.title} variant="h6" >
                                Browse Products {" "}
                                <i className="fa fa-caret-down"></i>
                            </Typography>
                            <div className="dropdown-content">
                                <div className="row">
                                    <div className="column">
                                        <h6>Man</h6>
                                        <Link to="/shoes" >  Shoes</Link>
                                        <Link to="/shoes" >Sports</Link>
                                        <Link to="/shoes" >Sandals</Link>
                                    </div>
                                    <div className="column">
                                        <h6>Women</h6>
                                        <Link to="" >Flat</Link>
                                        <Link to="" >Sports</Link>
                                        <Link to="" >Sandals</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography className={classes.title} variant="h6"  >
                            Find Store
                    </Typography>
                        <div className={classes.logo}>
                            <img src={`http://pakkapapita.com/servis/wp-content/uploads/2017/09/servis-logo-resized.png`} />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <div className="dropdownabs">
                                <Typography className="dropbtnabs" className={classes.title} variant="h6" >
                                    About Us {" "}
                                    <i className="fa fa-caret-down"></i>
                                </Typography>
                                <div className="dropdown-contentabs">
                                    <a href="#">About our service</a>
                                    <a href="#">About our team</a>
                                </div>
                            </div>

                            <Typography className={classes.title} variant="h6" >
                                Contact US
                    </Typography>
                            <IconButton
                                edge="end"
                                aria-label="Search for products"
                                color="black"
                            >
                                <SearchIcon />
                            </IconButton>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}