import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../../redux/actions/authAction";
import { useHistory } from "react-router-dom";

const GooglePrompt = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state);

  const onSuccess = (response) => {
    dispatch(googleLogin(response.credential, "Prompt"));
  };

  useEffect(() => {
    window.google?.accounts?.id.initialize({
      client_id:
        "1041745825482-u922584jq0c9tet934q43m003fl4s499.apps.googleusercontent.com",
      callback: onSuccess,
    });
    if (auth.access_token === undefined) {
      window.google?.accounts.id.prompt();
    } else {
      window.google?.accounts.id.cancel();
    }
  }, [history, auth]);

  return <div>
    
  </div>;
};
export default GooglePrompt;
