import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/Layout";

const Forget = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="auth-form">
        <h5>Forget Password</h5>
        <p>
          Enter your email address, We will send the password reset link <br />
          to your email address
        </p>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input">
          <input type="button" value="Send Mail" />
        </div>
      </div>
    </AuthLayout>
  );
};
export default Forget;
