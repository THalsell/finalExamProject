import { useState, useEffect } from "react";
// Importing useParams for accessing URL parameters and Link for navigation
import { useParams, Link } from 'react-router-dom';
import { CardContent, Typography, Button } from '@mui/material';
import { ProductDetailCard, ProductDetailContainer } from "./StyledComponents";


const ProductDetail = () => {
    
  const [product, setProduct] = useState({});
  // useParams hook to get the 'id' parameter from the URL
  const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
            setProduct(res);
            
          })
          .catch((err) => {
            console.error(err);
          });
          // The dependency array ensures this effect runs when the component mounts or 'id' changes
      }, [id]);

    return (
        <ProductDetailContainer>
            {/* Link component for navigation back to the home page */}
              <Link to="/">
        <Button>Back</Button>
      </Link>
      <ProductDetailCard>
      <img src={product.image}
          alt={product.title}
          height={200}
        />
        <CardContent>
        <Typography variant="h4">{product.title}</Typography>
          <Typography variant="h5">${product.price}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          
        </CardContent>
      </ProductDetailCard>  
        </ProductDetailContainer>
    );
};

export default ProductDetail;