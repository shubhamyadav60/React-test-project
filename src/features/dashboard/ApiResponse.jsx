import axios from "axios"
import { useEffect, useState } from "react"

const ApiResponse = () =>{
const [data,setData]= useState([])


const fetchItems = async() =>{
    try{
const response = await axios.get("https://reqres.in/api/users?page=2")
setData(response?.data?.data)
    }catch (err) {
        console.log(err)
    }
}
 useEffect(() => {
    fetchItems();
  }, []);

    return (<>
    <h1 style={{padding:"10rem"}}>API Response</h1>
    {/* <table className="crud-table">
          <thead>
            <tr>
              <th>FirstName</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item?.id}>
                <td>
                  {item?.first_name}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table> */}

<div className="overflow-x-auto p-4">
      <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
            <th className="px-6 py-3 text-left border border-gray-300">First Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((item) => (
              <tr
                key={item?.id}
                className="bg-white border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="px-6 py-3 border border-gray-300">{item?.first_name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="1" className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    
    </>)
}

export default ApiResponse