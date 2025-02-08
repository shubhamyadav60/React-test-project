import React, { useState, useEffect } from "react";
import axios from "axios";
import './Crud.css'
import AlertBox from "../../shared/components/common/AlertBox";

const API_URL = "https://63f1b3abaab7d09125f9b02f.mockapi.io/API/shubham";

const CRUD = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [deleteId, setDeleteId] = useState();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ Name: "", Price: "", Brand_Name: "", image: "" });
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(API_URL, newItem);
      setItems([...items, response.data]); 
      setNewItem({ Name: "", Price: "", Brand_Name: "", image: "" });
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, editingItem);
      setItems(items.map((item) => (item.id === id ? response.data : item)));
      setEditingItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/${deleteId}`);
      setItems(items.filter((item) => item.id !== deleteId)); 
      setShowAlert(false)
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingItem) {
      setEditingItem({ ...editingItem, [name]: value });
    } else {
      setNewItem({ ...newItem, [name]: value });
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCancel = () => {
    setShowAlert(false);
  };

  return (
    <div className="crud-container" >

      <div className="form-container">
        <h2>Add New Item</h2>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={newItem.Name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="Price"
          placeholder="Price"
          value={newItem.Price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Brand_Name"
          placeholder="Brand Name"
          value={newItem.Brand_Name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newItem.image}
          onChange={handleInputChange}
        />
        <button className="crdbutton" onClick={handleCreate}>Add Item</button>
      </div>

      <div className="items-container">
        <h2>Items List</h2>
        <table className="crud-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Brand Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  {editingItem?.id === item.id ? (
                    <input
                      type="text"
                      name="Name"
                      value={editingItem.Name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.Name
                  )}
                </td>
                <td>
                  {editingItem?.id === item.id ? (
                    <input
                      type="number"
                      name="Price"
                      value={editingItem.Price}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.Price
                  )}
                </td>
                <td>
                  {editingItem?.id === item.id ? (
                    <input
                      type="text"
                      name="Brand_Name"
                      value={editingItem.Brand_Name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.Brand_Name
                  )}
                </td>
                <td>
                  {editingItem?.id === item.id ? (
                    <>
                      <button className="crdbutton" onClick={() => handleUpdate(item.id)}>Save</button>
                      <button onClick={() => setEditingItem(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="edtbutton" onClick={() => setEditingItem(item)}>Edit</button>
                      <button className="dltbutton" onClick={() => {
                        setShowAlert(true)
                        setDeleteId(item.id)
                      }}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
{showAlert === true ? (<>
  <AlertBox
        title={"Are You Sure ?"}
        message={"This Record is permanently delete"}
        onConfirm={handleDelete}
        onCancel={handleCancel}
        showAlert={showAlert}
      /></>
):(<></>)}
     
    </div>
  );
};

export default CRUD;
