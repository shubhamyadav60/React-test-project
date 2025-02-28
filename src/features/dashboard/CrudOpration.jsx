import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Crud.css";
import AlertBox from "../../shared/components/common/AlertBox";
import AddItemModal from "./AddItemModal";
import SmartTable from "../../shared/common/SmartTable";
import toast from "react-hot-toast";

const API_URL = "https://63f1b3abaab7d09125f9b02f.mockapi.io/API/shubham";

const CRUD = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    Name: "",
    Price: "",
    Brand_Name: "",
    image: "",
  });
  const [editingItem, setEditingItem] = useState(null);

  const columns = [
    { key: "Name", label: "Client" },
    { key: "Price", label: "Amount", type: "number" },
    { key: "Brand_Name", label: "Brand Name" },
    { key: "Status", label: "Status" },
  ];

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
      toast.success("Record created successfully");
      setIsOpen(false);
      fetchItems();
    } catch (error) {
      console.error("Error creating item:", error);
      toast.error("Error creating item:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, editingItem);
      setItems(items.map((item) => (item.id === id ? response.data : item)));
      setEditingItem(null);
      toast.success("Record updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("Error updating item:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/${deleteId}`);
      setItems(items.filter((item) => item.id !== deleteId));
      setShowAlert(false);
      toast.success("Record deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item:", error);
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
    <div className="crud-container">
      <AddItemModal handleCreateItem={handleCreate} handleInputChange={handleInputChange} newItem={newItem} setNewItem={setNewItem} isOpen={isOpen} setIsOpen={setIsOpen} />

      <SmartTable data={items} columns={columns} onUpdate={handleUpdate} onDelete={handleDelete} setShowAlert={setShowAlert} setDeleteId={setDeleteId}  />;

      {showAlert === true ? (
        <>
          <AlertBox
            title={"Are You Sure ?"}
            message={"This Record is permanently delete"}
            onConfirm={handleDelete}
            onCancel={handleCancel}
            showAlert={showAlert}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CRUD;
