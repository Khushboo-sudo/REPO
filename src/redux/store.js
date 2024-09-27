import { configureStore } from '@reduxjs/toolkit';  
import authReducer from './authSlice'; // Later create authSlice for authentication  
import productsReducer from './productsSlice'; // Later create productsSlice for product management  

const store = configureStore({  
  reducer: {  
    auth: authReducer,  
    products: productsReducer,  
  },  
});  

export default store;