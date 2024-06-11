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

export { ProductGrid, Card }