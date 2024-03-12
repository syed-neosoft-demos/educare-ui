import AuthLayout from "../components/auth/Layout";

const SignUp = () => {
  return (
    <AuthLayout>
      <div className="auth-form">
        <h5>Registration</h5>
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
        <div className="input">
          <input type="button" value="Register Now" />
        </div>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
