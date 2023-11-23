import React from "react";
import { CardActionArea, CardMedia, CardContent, Rating, Typography, Card } from "@mui/material";

function ProductCard(props) {
    var product = props.product;

    return (
        <Card>
            <a href={`/product/${product.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={
                            "https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        title={product.name}></CardMedia>
                    <CardContent>
                        {/* <Typography>{product.brand}</Typography> */}
                        <Rating value={product.rating} readOnly></Rating>
                    </CardContent>
                </CardActionArea>
            </a>
            <Typography>${product.price}</Typography>
        </Card>
    );
}

export default ProductCard;
