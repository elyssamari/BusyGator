import React from 'react';

const AdminLogin = () => {
  return (
    <>
      <div id="login_signupcard" className="card card-center">
        <div className="card-header text-center">Admin Login</div>
        <div className="card-body">
          <p>All fields with an asterisk (*) are mandatory</p>
          <form>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Email*</label>
              <div className="col-sm-100">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Password*</label>
              <div className="col-sm-100">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>

          <a href="/">Forgot Password?</a>

          <div id="login_signin_button" className="card text-center">
            <a href="/" className="btn btn-primary">
              Login
            </a>
          </div>

          <div id="login_signup_text" className="text-center">
            <p>
              Not admin?
              <span className="space"></span>
              <a href="/Login">Login Here</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
