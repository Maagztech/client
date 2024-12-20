import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import Helmetglobal from "../components/global/Helmetglobal";
import { RootStore } from "../utils/TypeScript";

const Register = () => {
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
      <Helmetglobal title="Register" description="Register at CrunchCave to start your blogging and earning journey." keyword="Register" />

      <div className={`auth_box  bg-${isdarkMode?'dark':'light'} text-${isdarkMode?'white':'black'}`}>
        <h3 className="text-uppercase text-center mb-4">Register</h3>

        <RegisterForm />

        <p className="mt-2">
          {`Already have an account? `}
          <Link
            to={`/login${history.location.search}`}
            style={{ color: "crimson" }}
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
