const Footer = () => {
    return (

        <>
            <footer className="page-footer font-small bg-dark pt-4">
                <div className="container">
                    <div className="row">
                        <div id="footertext" className="col-md-6 mb-3">
                            <p>SFSU Software Engineering Project CSC 648-848,
                            Spring 2022. For Demonstration Only.</p>
                            <p>Software Engineering Class SFSU Spring 2022 Section 3 - Team 4 </p>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div id="adminbutton" className="text-end">
                                <a href="/Adminlogin" className="btn btn-light">Admin Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default Footer;
