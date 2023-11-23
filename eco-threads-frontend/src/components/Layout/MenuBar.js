import React from "react";
import {
    Typography,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";

function MenuBar(props) {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            flexGrow: 2,
                          display: { xs: "none", sm: "block" },
                            marginLeft: 6,fontWeight: 800
                        }}>
                        EcoThreads
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Button key={"add_product"} sx={{ color: "#fff" }}>
                            <AddIcon sx={{ m: 2 }} /> Add
                        </Button>
                        <Button key={"wishlist"} sx={{ color: "#fff" }}>
                            <FavoriteBorderIcon sx={{ m: 2 }} /> Wishlist
                        </Button>
                        <Button key={"profile"} sx={{ color: "#fff" }}>
                            <PermIdentityIcon sx={{ m: 2 }} /> Profile
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuBar;
