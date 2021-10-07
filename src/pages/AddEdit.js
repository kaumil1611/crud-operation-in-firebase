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

  const { name, email, password, mobileNo } = state;

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((user) => {
        setstate({ ...user.data() });
      });
  }, [id]);

  const submitUserFormHandler = (e) => {
    e.preventDefault();
    if (!name && !email && !password && !mobileNo) {
      toast.error("Please Provide each Input Value");
    } else {
      if (!id) {
        db.collection("users")
          .where("email", "==", state.email)
          .get()
          .then((doc) => {
            if (!doc.empty) {
              toast.error("user already exist");
            } else {
              db.collection("users")
                .add(state)
                .then(() => toast.success("user added successfully"))
                .catch((err) => toast.error(err));
              setTimeout(() => history.push("/"), 500);
            }
          });
      } else {
        db.collection("users")
          .doc(id)
          .set(state)
          .then(() => toast.success("update successfully"))
          .catch((err) => toast.error(err));

        setTimeout(() => history.push("/"), 500);
      }
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
          value={name || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="plz enter your Email"
          value={email || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="name">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="plz enter your password"
          value={password || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="mobileNo"
          placeholder="plz enter your contact number"
          value={mobileNo || ""}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
    </div>
  );
};

export default AddEdit;
