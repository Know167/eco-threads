import React from 'react'
import Typography from "@mui/material/core";

import Wishlist from '../Wishlist'
import Profile from '../Profile'

function MenuBar(props) {
  return (
      <div>
          <Typography variant="h2">Welcome to EcoThread</Typography>
      <div>
        <Wishlist />
        <Profile/>
          </div>
      </div>
  );
}

export default MenuBar
