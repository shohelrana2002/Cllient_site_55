import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUpdate = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };

    fetch(`http://localhost:5000/users/${loaderUpdate._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Update Success Fully");
        }
      });
  };

  return (
    <div>
      <p>
        Update <br />
      </p>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loaderUpdate.name} id="" />{" "}
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loaderUpdate.email}
          id=""
        />{" "}
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
