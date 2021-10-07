/* addedit page */

/* 

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { db } from "../firebase-config";

import { toast } from "react-toastify";


import "./AddEdit.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  mobileNo: "",
};
const AddEdit = () => {
  const [state, setstate] = useState(initialState);

  const [data, setData] = useState({});

  const { name, email, password, mobileNo } = state;

  const history = useHistory();

  const submitUserFormHandler = (e) => {
    e.preventDefault();
    if (!name && !email && !password && !mobileNo) {
      toast.error("Please Provide each Input Value");
    } else {
      db.collection("users").onSnapshot(function (querySnapshot) {
        // setUser(
        //   querySnapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     name: doc.data().name,
        //     email: doc.data().email,
        //     password: doc.data().password,
        //   }))
        // );

        console.log(state.email === querySnapshot.docs.data().email);
      });

      // .add(state)
      // .then(() => toast.success("user added successfully"))
      // .catch((err) => toast.error(err));
      // setTimeout(() => history.push("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={submitUserFormHandler}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="plz enter your Name"
          value={name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="plz enter your Email"
          value={email}
          onChange={handleInputChange}
        />

        <label htmlFor="name">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="plz enter your password"
          value={password}
          onChange={handleInputChange}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="mobileNo"
          placeholder="plz enter your contact number"
          value={mobileNo}
          onChange={handleInputChange}
        />

        <input type="submit" value="save" />
      </form>
    </div>
  );
};

export default AddEdit;



*/

/* view.js page */

/* 


import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
const View = () => {
  const [user, setUser] = useState([]);
  function getUsers() {
    db.collection("users").onSnapshot(function (querySnapshot) {
      setUser(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          password: doc.data().password,
        }))
      );
    });
  }
  useEffect(() => {
    getUsers();
  }, []);

  console.log(user);
  return (
    <div>
      <h2>View</h2>
    </div>
  );
};

export default View;



*/
