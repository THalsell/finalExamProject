import { useState, useEffect } from "react";
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

    return (
        <ProductGrid>
           {products.map((item) => {
            return (
                <Card key={item.id}>
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