import React from 'react';

const ForgetPassword = () => {
  return (
    <>
      <div className="col-lg-4 offset-lg-4 my-5">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Forget Password</h3>
          </div>
          <div className="card-body text-center">
            <input
              type="text"
              className="form-control my-3"
              placeholder="Enter your Email"
            />
            <input
              type="submit"
              className="btn btn-success btn-block"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
