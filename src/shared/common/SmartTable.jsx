import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

export default function SmartTable({ data, columns, onUpdate ,setShowAlert ,setDeleteId }) {
  const [editingItem, setEditingItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleInputChange = (e) => {
    setEditingItem({ ...editingItem, [e.target.name]: e.target.value });
  };

  const handleSave = (id) => {
    onUpdate(id, editingItem);
    setEditingItem(null);
  };

  // Pagination Logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayedItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              {columns.map((col) => (
                <th key={col.key} className="py-3 px-6 text-left">
                  {col.label}
                </th>
              ))}
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {displayedItems.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                {columns.map((col) => (
                  <td key={col.key} className="py-3 px-6">
                    {editingItem?.id === item.id ? (
                      <input
                        type={col.type || "text"}
                        name={col.key}
                        value={editingItem[col.key]}
                        onChange={handleInputChange}
                        className="border p-1 w-full rounded"
                      />
                    ) : (
                      item[col.key]
                    )}
                  </td>
                ))}
                <td className="py-3 px-6 text-center">
                  {editingItem?.id === item.id ? (
                    <>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                        onClick={() => handleSave(item.id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                        onClick={() => setEditingItem(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="px-3 py-1 rounded-full"
                        onClick={() => setEditingItem(item)}
                      >
                        <MdEdit size={20} className="text-[#0056b3]" />
                      </button>
                      <button
                        className="px-3 py-1 rounded-full"
                        onClick={() => {
                            setShowAlert(true)
                            setDeleteId(item?.id)
                            }}
                      >
                        <RiDeleteBinFill size={20} className="text-[#d9534f]" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between p-4 bg-gray-100">
        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}
        </span>
        <div>
          <button
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded mr-2 disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <button
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
