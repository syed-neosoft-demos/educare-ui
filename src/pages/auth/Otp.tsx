import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/Layout";

const Otp = () => {
  return (
    <AuthLayout>
      <div className="auth-form">
        <h5>OTP Confirmation</h5>
        <p>An OTP has been sent to your email. Please verify it below.</p>
        <div className="input">
          <label htmlFor="email">OTP</label>
          <div className="otp">
            <input type="text" name="email" id="email" />
            <input type="text" name="email" id="email" />
            <input type="text" name="email" id="email" />
            <input type="text" name="email" id="email" />
            <input type="text" name="email" id="email" />
            <input type="text" name="email" id="email" />
          </div>
        </div>
        <div className="input">
          <input type="button" value="Verify" />
        </div>
        <p>Haven’t you received the verification code? </p>
        <div className="privacy-container">
          <Link to="/auth/forget"> Resend OTP</Link>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Otp;
