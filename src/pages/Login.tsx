import AuthLayout from "../components/auth/Layout";

const Login = () => {
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
        <div className="input">
          <input type="button" value="Log In" />
        </div>
      </div>
    </AuthLayout>
  );
};
export default Login;
