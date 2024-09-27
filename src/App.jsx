// src/App.jsx  
import React from 'react';  
import { Provider } from 'react-redux';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import store from './redux/store'; // Import your Redux store  
import ProductList from './components/ProductList'; // Import Product List Component  
import CRUDPage from './components/CRUDPage'; // Import CRUD Page Component  
import Navbar from './components/Navbar'; // Import Navbar Component  
import Login from './components/Login'; // Import Login Component  
import Register from './components/Register'; // Import Register Component  

const App = () => {  
  return (  
    <Provider store={store}>  
      <Router>  
        <div>  
          <Navbar /> {/* Include the Navbar here */}  
          <h1>My Product Management App</h1>  
          <Routes>  
            <Route path="/" element={<ProductList />} />  
            <Route path="/crud" element={<CRUDPage />} />  
            <Route path="/login" element={<Login />} />  
            <Route path="/register" element={<Register />} />  
          </Routes>  
        </div>  
      </Router>  
    </Provider>  
  );  
};  

export default App;