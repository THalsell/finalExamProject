import { useState, useEffect } from "react";
// Importing useParams for accessing URL parameters and Link for navigation
import { useParams, Link } from 'react-router-dom';


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
        <div>
            {/* Link component for navigation back to the home page */}
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