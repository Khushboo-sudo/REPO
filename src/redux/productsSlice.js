// src/redux/productsSlice.js  
import { createSlice } from '@reduxjs/toolkit';  
import axios from 'axios';  

const API_URL = 'https://dummyjson.com/products'; // Base API URL  

const productsSlice = createSlice({  
  name: 'products',  
  initialState: {  
    list: [],  
    loading: false,  
    error: null,  
  },  
  reducers: {  
    setProducts: (state, action) => {  
      state.list = action.payload;  
    },  
    addProduct: (state, action) => {  
      state.list.push(action.payload);  
    },  
    updateProduct: (state, action) => {  
      const index = state.list.findIndex((product) => product.id === action.payload.id);  
      if (index !== -1) {  
        state.list[index] = action.payload;  
      }  
    },  
    deleteProduct: (state, action) => {  
      state.list = state.list.filter((product) => product.id !== action.payload);  
    },  
    setLoading: (state, action) => {  
      state.loading = action.payload;  
    },  
    setError: (state, action) => {  
      state.error = action.payload;  
    },  
  },  
});  

// Export the action creators  
export const {  
  setProducts,  
  addProduct,  
  updateProduct,  
  deleteProduct,  
  setLoading,  
  setError,  
} = productsSlice.actions;  

// Thunks for CRUD operations  
export const fetchProducts = () => async (dispatch) => {  
  dispatch(setLoading(true));  
  try {  
    const response = await axios.get(API_URL);  
    dispatch(setProducts(response.data.products));  
  } catch (error) {  
    dispatch(setError(error.message || 'Failed to fetch products'));  
  } finally {  
    dispatch(setLoading(false));  
  }  
};  

export const createProduct = (product) => async (dispatch) => {  
  dispatch(setLoading(true));  
  try {  
    const response = await axios.post(API_URL, product);  
    dispatch(addProduct(response.data));  
  } catch (error) {  
    dispatch(setError(error.message || 'Failed to create product'));  
  } finally {  
    dispatch(setLoading(false));  
  }  
};  

export const editProduct = (product) => async (dispatch) => {  
  dispatch(setLoading(true));  
  try {  
    const response = await axios.put(`${API_URL}/${product.id}`, product);  
    dispatch(updateProduct(response.data));  
  } catch (error) {  
    dispatch(setError(error.message || 'Failed to update product'));  
  } finally {  
    dispatch(setLoading(false));  
  }  
};  

export const removeProduct = (id) => async (dispatch) => {  
  dispatch(setLoading(true));  
  try {  
    await axios.delete(`${API_URL}/${id}`);  
    dispatch(deleteProduct(id));  
  } catch (error) {  
    dispatch(setError(error.message || 'Failed to delete product'));  
  } finally {  
    dispatch(setLoading(false));  
  }  
};  

// Export the reducer  
export default productsSlice.reducer;