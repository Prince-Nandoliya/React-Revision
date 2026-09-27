import React from "react";

const Listtodo = ({todos}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Task</th>
            <th>Descriptio</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t, index) => {
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

export default Listtodo;
