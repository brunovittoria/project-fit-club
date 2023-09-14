import React, { useState } from "react";
import './navbar.css'
import { useSpring, animated } from "react-spring";
import {Link} from "react-scroll";
import Logo from "../../assets/logo.svg.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Navigate, useNavigate } from "react-router-dom";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import { Home } from "@mui/icons-material"
import { Info } from "@mui/icons-material"
import { CommentRounded } from "@mui/icons-material"
import { PhoneRounded } from "@mui/icons-material"
import { ShoppingCartRounded } from "@mui/icons-material"

export default function NavBar(){
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <Home />,
        },
        {
            text: "About",
            icon: <Info />,
        },
        {
            text: "Testimonials",
            icon: <CommentRounded />,
        },
        {
            text: "Contact",
            icon: <PhoneRounded />,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRounded />,
        },
    ]
    
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>

            <div className="navbar-links-container">
                <Link className="link-navbar" to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                <Link className="link-navbar" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                <Link className="link-navbar" to="testimonials" spy={true} smooth={true} offset={50} duration={500}>Testimonials</Link>
                <Link className="link-navbar" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
            
                <Link to="/form">
                <button className="primary-button" onClick={() => navigate("/form")}> Register Now</button>
                </Link>
            </div>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Drawer>

        </nav>
    )

}