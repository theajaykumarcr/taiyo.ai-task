import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { firstName, lastName } = existingUser[0];
  const [ufirstName, setName] = useState(firstName);
  const [ulastName, setLName] = useState(lastName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        firstName: ufirstName,
        lastName: ulastName,
      })
    );
    navigate("/");
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "#4C86C1", paddingLeft: "10px" }}
        className="flex justify-center items-center  px-4 py-2"
      >
        <h1 className="text-white text-center text-2xl font-bold">
          Contact Page
        </h1>
      </nav>
      <br />
      <div className="flex items-center justify-center">
        <div className="w-1/2 border bg-slate-500 text-white p-5">
          <h1 className="text-center text-2xl font-bold mb-5">Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                First Name :
              </label>
              <input
                type="text"
                name="firstName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter first name"
                value={ufirstName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lname" className="block font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Last Name"
                value={ulastName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Save Edited Contact
            </Link>
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
