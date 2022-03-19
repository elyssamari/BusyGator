const Signup = () => {
    return (
        <>
            <div id="login_signupcard" className="card card-center">
                <div className="card-header text-center">
                    Sign Up
                </div>
                <div className="card-body">
                <p>All fields with an asterisk (*) are mandatory
                        </p>
                    <form>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Email*</label>
                            <div className="col-sm-100">
                                <input type="email" className="form-control" placeholder="Email"  />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                            <label className="col-sm-4 col-form-label">First Name*</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                            </div>
                            <div className="col">
                            <label className="col-sm-4 col-form-label">Last Name*</label>

                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Password*</label>
                            <div className="col-sm-100">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                        </div>
                    </form>


                    <div id="login_signin_button" className="card text-center">
                        <a href="/" className="btn btn-primary">Sign Up</a>
                    </div>

                    <div id="login_signup_text" className="text-center">
                        <p>Have an account?
                        <span className="space"></span>
                            <a href="/Login">Login Here</a>
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Signup;