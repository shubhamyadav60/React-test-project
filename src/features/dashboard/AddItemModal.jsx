import React from "react";

export default function AddItemModal({ handleCreateItem,handleInputChange,newItem, isOpen, setIsOpen }) {

  return (
    <div className="flex justify-end items-center ">
      {/* Button to open modal */}
      <button
        className="bg-blue-600 text-white m-2 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => setIsOpen(true)}
      >
        Add New Item
      </button>

      {/* Modal (Popup) */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Add New Item</h2>
            
            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={newItem.Name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <input
                type="number"
                name="Price"
                placeholder="Price"
                value={newItem.Price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <input
                type="text"
                name="Brand_Name"
                placeholder="Brand Name"
                value={newItem.Brand_Name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newItem.image}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={()=>{handleCreateItem()}}
                >
                  Add Item
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
