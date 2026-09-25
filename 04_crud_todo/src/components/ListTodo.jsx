import React from 'react'

const ListTodo = ({todos}) => {
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Task</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((t,index) => {
                return(
                    <tr key={t.id}>
                        <td>{index + 1}</td>
                        <td>{t.Task}</td>
                        <td>{t.Description}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}

export default ListTodo
