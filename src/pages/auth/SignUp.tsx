import { Link, useNavigate } from "react-router-dom";
import back from "../../assets/auth/back-icon.svg";
import AuthLayout from "../../components/auth/Layout";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="auth-form">
        <span role="button" onClick={() => navigate("/auth/login")}>
          <img src={back} alt="" srcSet={back} />
          <h5>Registration</h5>
        </span>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input">
          <label htmlFor="email">Contact Number</label>
          <input type="text" name="email" id="email" placeholder="Enter contact number" />
        </div>
        <div className="input">
          <label htmlFor="email">Password</label>
          <input type="text" name="email" id="email" placeholder="Enter password" />
        </div>
        <div className="input">
          <label htmlFor="email">Confirm Password</label>
          <input type="text" name="email" id="email" placeholder="Enter confirm password" />
        </div>
        <div className="privacy-container">
          <div className="privacy">
            <input type="checkbox" name="check" id="" />I agree to
            <Link to="auth/forget"> Terms & Conditions</Link>
          </div>
        </div>
        <div className="input">
          <input type="button" value="Register Now" />
        </div>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
