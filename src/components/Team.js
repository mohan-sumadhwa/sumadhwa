import Header from './Header';
import '../styles/style.css';

function Team() {
    return (
        <div>
            <section id="team" className="team grey-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Team</h2>
                        <h5>
                        Meet Sumadhwa's manufacturing mavens
                        </h5>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/banaji.png")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Nagaraj Banaji</h4>
                                    <span>Lead Consultant</span>
                                    {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos-delay="100">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/srinivas.png")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Srinivas N</h4>
                                    <span>Principal Consultant Process Management</span>
                                    {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos-delay="200">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/suresh.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Suresh Katti</h4>
                                    <span>Principal Consultant Production Management</span>
                                    {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos-delay="200">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/mohan.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Mohan K V</h4>
                                    <span>Principal Consultant Automation</span>
                                    {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos-delay="200">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/venu.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Venu B V</h4>
                                    <span>Principal Consultant Quality Management</span>
                                    {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos-delay="200">
                                <div className="pic">
                                    <img
                                        src={require("../images/team/kemkar.jpg")}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>P C Kemkar </h4>
                                    <span>Principal Consultant EHS Management</span>
                                    {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
