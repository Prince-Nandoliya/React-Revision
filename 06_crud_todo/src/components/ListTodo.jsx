import React from "react";

const ListTodo = ({ toods }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Task</th>
            <th>Description</th>
          </tr>
            </thead>
          <tbody>
            {toods.map((t, index) => {
              return (
                <tr key={t.id}>
                  <td>{index + 1}</td>
                  <td>{t.Task}</td>
                  <td>{t.Description}</td>
                </tr>
              );
            })}
          </tbody>
      
      </table>
    </>
  );
};

export default ListTodo;
