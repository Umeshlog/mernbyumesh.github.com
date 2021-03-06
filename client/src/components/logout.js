import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  //using promise

  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        history.push("/Login", { replace: true });
        if (!res.status != 200) {
          const error = new Error(res.eroor);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <></>;
};

export default Logout;
