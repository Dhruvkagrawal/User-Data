import React, { useEffect, useState } from "react";
import "./Table.css";

function Table() {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const res = await fetch("http://localhost:3001/user");
    let data = await res.json();
    setUser(data.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  function deleteUser(id) {
    fetch(`http://localhost:3001/user/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        getUsers();
      });
    });
  }
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contract</th>
            <th>Action</th>
          </tr>
        </thead>
        {user.map((dta, i) => (
          <tbody>
            <tr className="active-row">
              <td>{i++}</td>
              <td>{dta.name}</td>
              <td>{dta.email}</td>
              <td>{dta.phone_number}</td>
              <td>
                <button
                  onClick={() => deleteUser(dta._id)}
                  style={{ color: "red" }}
                >
                  Delete data
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Table;
