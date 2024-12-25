import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Typography, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import mainlogo from "../../Images/main logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white", color:'grey' }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={mainlogo} alt="Assarain Food Products" style={{ height: "50px" }} />
          </Box>

          
          <IconButton
            size="large"
            color="inherit"
            aria-label="search"
            onClick={handleSearchClick}
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)", 
            }}
          >
            <SearchIcon />
          </IconButton>

        
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "20px",
            }}
          >
            {["Home", "About Us", "What We Do", "Brands", "News", "Careers", "Contact Us"].map((item) => (
              <Typography
                key={item}
                variant="h6"
                component="div"
                sx={{
                  cursor: "pointer",
                  borderBottom: selectedItem === item ? "2px solid blue" : "none",
                  paddingBottom: "5px",
                  transition: "border-bottom 0.3s ease",
                }}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </Typography>
            ))}
          </Box>

          
          <IconButton
            size="large"
            color="inherit"
            aria-label="search"
            onClick={handleSearchClick}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <SearchIcon />
          </IconButton>

          
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

       
        {isSearchOpen && (
          <Box sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              label="Search"
              sx={{
                width: "60%",
                
              }}
            />
          </Box>
        )}
      </AppBar>

      
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {["Home", "About Us", "What We Do", "Brands", "News", "Careers", "Contact Us"].map((item) => (
          <MenuItem key={item} onClick={() => handleItemClick(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Navbar;
