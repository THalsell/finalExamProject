import { useState, useEffect } from "react";
// Importing styled components for styling the grid and card
import { ProductGrid, Card } from "./StyledComponents";




const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
            setProducts(res);
            
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);
       
      // Function to handle the click event on a product card, navigating to the product detail page using window.location.href
      const handleCardClick = (id) => {
        window.location.href = `/product/${id}`;
      };

    return (
        <ProductGrid>
           {products.map((item, index) => {
            
            return (
                // Mapping over the products array to create a card for each product
                <Card key={index} onClick={() => handleCardClick(item.id)}>
                    <img src={item.image} height="140" width="120" />
                    <h3>{item.title}</h3>
                    <p>Rating: {item.rating.rate}</p>
                    ${item.price}
                    
                </Card>
            )
            
           })}
        </ProductGrid>
    );
};

export default ProductList;