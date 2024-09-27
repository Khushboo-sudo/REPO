import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { fetchProducts } from '../redux/productsSlice'; 
 

const ProductList = () => {  
  const dispatch = useDispatch();  
  const products = useSelector((state) => state.products.list);  

  useEffect(() => {  
    dispatch(fetchProducts());  
  }, [dispatch]);  

  return (  
    <table>  
      <thead>  
        <tr>  
          <th>ID</th>  
          <th>Title</th>  
          <th>Price</th>  
        </tr>  
      </thead>  
      <tbody>  
        {products.map((product) => (  
          <tr key={product.id}>  
            <td>{product.id}</td>  
            <td>{product.title}</td>  
            <td>{product.price}</td>  
          </tr>  
        ))}  
      </tbody>  
    </table>  
  );  
};  

export default ProductList;