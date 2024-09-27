// src/components/CRUDPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  createProduct,
  editProduct,
  removeProduct,
} from "../redux/productsSlice";

const CRUDPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [formData, setFormData] = useState({ id: "", title: "", price: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editProduct(formData));
    } else {
      dispatch(createProduct({ title: formData.title, price: formData.price }));
    }
    setFormData({ id: "", title: "", price: "" });
    setIsEditing(false);
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Title"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Product Price"
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add"} Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.price}</td>
              <td>
                <button onClick={() => handleEdit(d)}>Edit</button>
                <button onClick={() => handleDelete(d.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRUDPage;
