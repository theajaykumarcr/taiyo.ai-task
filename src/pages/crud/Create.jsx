import React, { useState } from "react";
import { addUser } from "../../UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const [firstName, setName] = useState("");
  const [lastName, setLName] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, firstName, lastName })
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
          <h1 className="text-center text-2xl font-bold mb-5">
            Create Contact Screen
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                First Name :
              </label>
              <input
                type="text"
                name="firstName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lname"
                className="block text-white font-bold mb-2"
              >
                Last Name :
              </label>
              <input
                type="text"
                name="lastName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save Contact
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
