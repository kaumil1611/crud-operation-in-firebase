import React, { useState, useEffect, useCallback } from "react";
import { db } from "../firebase-config";

import { useParams, useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
const View = () => {
  const [user, setuser] = useState({});
  const { id } = useParams();

  const viewUserData = useCallback(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((gUser) => {
        setuser({ ...gUser.data() });
      });
  }, [id]);
  useEffect(() => viewUserData(), [viewUserData]);

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{user.name}</div>
          <div className="meta">{user.email}</div>
          <div className="description">{user.mobileNo}</div>
          <Link to="/">
            <button class="ui animated button">
              <div class="visible content">Go Back</div>
              <div class="hidden content">
                <i aria-hidden="true" class="arrow left icon"></i>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
