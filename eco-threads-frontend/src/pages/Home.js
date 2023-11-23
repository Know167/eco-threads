import React from "react";
import { Box, Grid } from "@mui/material";

import ProductCard from "../components/ProductCard";

function Home(props) {
    // demo data
    var latestProducts = [
        {
            name: "Denim",
            image: "new img",
            category: "Jeans",
            brand: "Nike",
            description:
                "A brand new jeans bought just yesterday dont want anymore",
            price: "45",
            rating: "3",
        },
        {
            name: "Denim",
            image: "new img",
            category: "Jeans",
            brand: "Nike",
            description:
                "A brand new jeans bought just yesterday dont want anymore",
            price: "45",
            rating: "3",
        },
        {
            name: "Denim",
            image: "new img",
            category: "Jeans",
            brand: "Nike",
            description:
                "A brand new jeans bought just yesterday dont want anymore",
            price: "45",
            rating: "3",
        },
        {
            name: "Denim",
            image: "new img",
            category: "Jeans",
            brand: "Nike",
            description:
                "A brand new jeans bought just yesterday dont want anymore",
            price: "45",
            rating: "3",
        },
    ];
    return (
        <Box component="main" sx={{ p: 3, m:3 }} >
            <Grid container spacing={3}>
                {/* {props.latestProducts.map((product) => ( */}
                {latestProducts.map((product) => (
                    <Grid item md={2} key={product.name}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Home;
