import React from 'react'
import Grid from '@mui/material/core'

function Home(props) {
  return (
      <div>
          <Grid container spacing={3}>
              {props.latestProducts.map((product) => (
                  <Grid item md={4} key={product.name}>
                      {/* <ProductItem product={product} /> */}
                  </Grid>
              ))}
          </Grid>
      </div>
  );
}

export default Home
