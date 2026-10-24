import React, { useEffect, useState } from "react";
import allStudent from "../api/Student";

const Student = () => {
  const [student, setStudent] = useState([]);

  const allStudents = async () => {
    const data = await allStudent();
    setStudent(data);
  };

  useEffect(() => {
    allStudents();
  }, []);

  return (
    <>
      <table className="table table-striped table-bordered ">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>grid</th>
            <th>email</th>
            <th>mobileNumber</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.grid}</td>
              <td>{item.email}</td>
              <td>{item.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Student;
