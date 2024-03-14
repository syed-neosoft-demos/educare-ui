import { Link, useNavigate } from "react-router-dom";
import Or from "../../assets/Or.svg";
import AuthLayout from "../../components/auth/Layout";

const Reset = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="auth-form">
        <h5>Reset Password</h5>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" placeholder="Enter password" />
        </div>
        <div className="input">
          <label htmlFor="email">Confirm Password</label>
          <input
            type="text"
            name="cnfPassword"
            id="cnfPassword"
            placeholder="Enter confirm password"
          />
        </div>

        <div className="input">
          <input type="button" value="Reset Password" />
        </div>
      </div>
    </AuthLayout>
  );
};
export default Reset;
