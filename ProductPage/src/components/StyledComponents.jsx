import styled from 'styled-components';

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  text-align: center;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  text-align: center;
  width: 200px;
`;

const ProductDetailCard = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
`;

const ProductDetailContainer = styled.div`
     display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export { ProductGrid, Card, ProductDetailCard, ProductDetailContainer }