import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import LoginPass from "../components/auth/LoginPass";
import SocialLogin from "../components/auth/SocialLogin";

import { RootStore } from "../utils/TypeScript";
import Helmetglobal from "../components/global/Helmetglobal";

const Login = () => {
  const history = useHistory();

  const { auth,darkMode } = useSelector((state: RootStore) => state);
  const {isdarkMode}=darkMode;
  useEffect(() => {
    if (auth.access_token) {
      let url = history.location.search.replace("?", "/");
      return history.push(url);
    }
  }, [auth.access_token, history]);

  return (
    <div className={`auth_page bg-${isdarkMode?'dark':'light'} text-${isdarkMode?'white':'black'}`}>
      <Helmetglobal title="Login" description="Login to CrunchCave to write a blog an dearn." keyword="Login" />
      <div className={`auth_box bg-${isdarkMode?'dark':'light'} `}>
        <h3 className="text-uppercase text-center mb-4">Login</h3>
        <SocialLogin referer="" />
        <LoginPass />

        <small className="row my-2 text-primary" style={{ cursor: "pointer" }}>
          <span className="col-6">
            <Link to="/forgot_password">Forgot password?</Link>
          </span>
        </small>

        <p>
          {`You don't have an account? `}
          <Link
            to={`/register${history.location.search}`}
            style={{ color: "crimson" }}
          >
            Register Now
          </Link>
        </p>
      </div>
    </div >
  );
};

export default Login;
