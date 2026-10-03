//listtodo
import React from "react";
import Table from "react-bootstrap/Table";

const Listodos = ({ todos, handleDelete, handleEdit, handleCheck }) => {
  return (
    <>
    <div className="card w-75 mx-auto">
          <Table className="table  table-bordered border-dark  w-75 mx-auto mt-3 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>status</th>
            <th>Task</th>
            <th>Descriptiom</th>
            <th colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((t, index) => {
            return (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>
                  <input type="checkbox" checked={t.completed} onChange={() => handleCheck(t.id)} />
                </td>
                <td>{t.Task}</td>
                <td>{t.Description}</td>
                <td>
                  <button
                    className="rounded-2  bg-warning text-white"
                    onClick={() => handleEdit(t.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="rounded-2 bg-danger text-white"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default Listodos;
