import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';


const ProductDetail = () => {
    
  const [product, setProduct] = useState({});
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
      }, [id]);

    return (
        <div>
              <Link to="/">
        <button>Back</button>
      </Link>
      <div>
        <img src={product.image}
          alt={product.title}
        />
        <div>
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <p>{product.description}</p>
          
        </div>
      </div>  
        </div>
    );
};

export default ProductDetail;