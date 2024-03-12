import educareLogo from "../assets/educare-logo.svg";
import educareTxtLogo from "../assets/educare-txt-logo.svg";

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="text-logo">
          <img src={educareTxtLogo} alt="educare logo" />
        </div>
        <div className="content">
          <p className="quotes">
            Education is the most powerful weapon which you can use to change the world.
            <span> - Nelson Mandela -</span>
          </p>
          <img src={educareLogo} alt="educare logo" className="logo" />
        </div>
      </div>
      <div className="auth-right">
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
      </div>
    </div>
  );
};
export default SignUp;
