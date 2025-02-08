import React, { useEffect, useState } from "react";

const RightClickTable = () => {
  const [userRole, setUserRole] = useState(""); 
  const rows = [
    { id: 1, name: "Row 1" },
    { id: 2, name: "Row 2" },
    { id: 3, name: "Row 3" },
  ]


  useEffect(() => {
    const fetchUserRole = async () => {
      const apiResponse = { role: "admin" }; 
      setUserRole(apiResponse.role);
    };

    fetchUserRole();
  }, []);

 
  const handleRightClick = (e, row) => {
    if (userRole !== "admin") {
      e.preventDefault(); 
      alert("Right-click is disabled for your role.");
    } else {
      alert(`Right-click is enabled for ${row.name}`);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Dynamic Right-Click Table</h1>
      <p>
        User Role: <strong>{userRole || "Loading..."}</strong>
      </p>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              ID
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => (
            <tr
              key={row.id}
              onContextMenu={(e) => handleRightClick(e, row)} // Dynamic control
              style={{
                cursor: userRole === "admin" ? "context-menu" : "not-allowed",
              }}
            >
              <td
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                {row.id}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                {row.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RightClickTable;
