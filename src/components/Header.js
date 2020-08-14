import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import "../App.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        backgroundColor: "red",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    MuiAppBarColorPrimary: {
        backgroundColor: "red",
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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
    searchIcon: {
        // padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        '&:hover': {
            color: 'red',
            backgroundColor: 'red'
        },
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );

    // const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    //     <Menu
    //         anchorEl={mobileMoreAnchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={mobileMenuId}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMobileMenuOpen}
    //         onClose={handleMobileMenuClose}
    //     >
    //         <MenuItem>
    //             <IconButton aria-label="show 4 new mails" color="inherit">
    //                 <Badge badgeContent={4} color="secondary">
    //                     <MailIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Messages</p>
    //         </MenuItem>
    //         <MenuItem>
    //             <IconButton aria-label="show 11 new notifications" color="inherit">
    //                 <Badge badgeContent={11} color="secondary">
    //                     <NotificationsIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Notifications</p>
    //         </MenuItem>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton
    //                 aria-label="account of current user"
    //                 aria-controls="primary-search-account-menu"
    //                 aria-haspopup="true"
    //                 color="inherit"
    //             >
    //                 <AccountCircle />
    //             </IconButton>
    //             <p>Profile</p>
    //         </MenuItem>
    //     </Menu>
    // );

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap >
                        Home
                    </Typography>
                    {/* <div className="navbar"> */}
                    <div className="dropdown">
                        <Typography className="dropbtn" className={classes.title} variant="h6" noWrap>
                            Browse Products {" "}
                            <i className="fa fa-caret-down"></i>
                        </Typography>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="column">
                                    <h3>Man</h3>
                                    <a href="#">Shoes</a>
                                    <a href="#">Sports</a>
                                    <a href="#">Sandals & Slippers</a>
                                </div>
                                <div className="column">
                                    <h3>Women</h3>
                                    <a href="#">Flat</a>
                                    <a href="#">Sports</a>
                                    <a href="#">Sandals</a>
                                </div>
                                {/* <div className="column">
                                    <h3>Kids</h3>
                                    <a href="#">Boys</a>
                                    <a href="#">Girs</a>
                                    <a href="#"> {"   "}</a>
                                </div>

                                <div className="column">
                                    <h3>Accessories</h3>
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <Typography className={classes.title} variant="h6" noWrap>
                        Find Store
                    </Typography>
                    <div className={classes.logo}>
                        <img src={`http://pakkapapita.com/servis/wp-content/uploads/2017/09/servis-logo-resized.png`} />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <div className="dropdownabs">
                            <Typography className="dropbtnabs" className={classes.title} variant="h6" noWrap>
                                About Us {" "}
                                <i className="fa fa-caret-down"></i>
                                {/* <span><ArrowDropDownIcon /></span> */}
                            </Typography>
                            <div class="dropdown-contentabs">
                                <a href="#">About our service</a>
                                <a href="#">About our team</a>
                            </div>
                        </div>
                        <Typography className={classes.title} variant="h6" noWrap>
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
                    {/* <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div> */}
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu} */}
            {/* {renderMenu} */}
        </div>
    );
}



export function DropDownAge() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button className={classes.button} onClick={handleOpen}>
                Open the select
      </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
