import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Users Delete Success Fully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
    console.log("Delete Id :", _id);
  };
  return (
    <div>
      <p>Users{users.length}</p>

      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} :{user.email}::
            {user._id}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
