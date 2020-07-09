import React from "react";

const lisfOfUsers = (props) => {
  const style = {
    marginTop: "15px",
  };

  return (
    <div className="container" style={style}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.persons.map((person, index) => (
            <tr key={index}>
              <td> {person.firstName} </td>
              <td> {person.lastName} </td>
              <td> {person.userName} </td>
              <td> {person.passWord} </td>
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={(e) => props.editSubmitHandler(e, index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => props.deletePersonHandler(person.index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default lisfOfUsers;
