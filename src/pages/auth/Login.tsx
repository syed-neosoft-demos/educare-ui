import { Link, useNavigate } from "react-router-dom";
import Or from "../../assets/Or.svg";
import AuthLayout from "../../components/auth/Layout";

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="auth-form">
        <h5>Login</h5>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input">
          <label htmlFor="email">Password</label>
          <input type="text" name="email" id="email" placeholder="Enter password" />
        </div>
        <div className="privacy-container">
          <div className="privacy">
            <input type="checkbox" name="check" id="" />
            <span>Remember Me</span>
          </div>
          <Link to="auth/forget"> Forget Password</Link>
        </div>
        <div className="input">
          <input type="button" value="Log In" />
        </div>
        <div className="or">
          <img src={Or} alt="" srcSet={Or} />
        </div>
        <h5>Register</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="input">
          <input type="button" value="Sign Up" onClick={() => navigate("/auth/signup")} />
        </div>
      </div>
    </AuthLayout>
  );
};
export default Login;
