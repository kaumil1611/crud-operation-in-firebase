import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import { Confirm } from "semantic-ui-react";

const Home = () => {
  const [data, setData] = useState({});
  const [confirm, setConfirm] = useState(false);
  const [getId, setGetId] = useState(false);
  const open = (id) => {
    setConfirm(true);
    setGetId(id);
  };
  const close = () => setConfirm(false);

  const sure = () => {
    setConfirm(false);
    confirm &&
      db
        .collection("users")
        .doc(getId)
        .delete()
        .then(() => toast.success("user Delete successfully"))
        .catch((err) => toast.error(err));
  };

  useEffect(() => {
    db.collection("users").onSnapshot(function (querySnapshot) {
      if (querySnapshot.docs.values !== null) {
        setData(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            password: doc.data().password,
            mobileNo: doc.data().mobileNo,
          }))
        );
      } else {
        toast.error("No data availabale");
      }
    });
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <Confirm open={confirm} onCancel={close} onConfirm={sure} />
    
      <table className="ui celled table">
        <thead className="">
          <tr className="">
            <th className="">#</th>
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Password</th>
            <th className="">Contact</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {Object.keys(data).map((id, index) => {
            return (
              <tr className="" key={id}>
                <td className="">{index + 1}</td>
                <td className="">{data[id].name}</td>
                <td className="">{data[id].email}</td>
                <td className="">{data[id].password}</td>
                <td className="">{data[id].mobileNo}</td>
                <td className="">
                  <Link to={`/update/${data[id].id}`}>
                    <button className="ui button">
                      <i className="edit outline icon"></i>
                    </button>
                  </Link>
                  <button
                    className="ui button"
                    onClick={() => open(data[id].id)}
                  >
                    <i className="trash alternate outline icon"></i>
                  </button>
                  <Link to={`/view/${data[id].id}`}>
                    <button className="ui button">
                      <i className="eye icon"></i>
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
