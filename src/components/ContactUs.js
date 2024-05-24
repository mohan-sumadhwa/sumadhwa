import Header from './Header';
import '../styles/style.css';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function ContactUs() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (window.Tally) {
            window.Tally.loadEmbeds();
        }
    }, [])


    const spinner = () => {
        return (
            <div className='spinner center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Header active="contact"></Header>
            <section className='hero contact-bg'>
                <div className="container">
                    <div className="row">
						<div className="col-lg-12 order-1 order-lg-2 d-flex flex-column justify-content-center">
							<div>
								<h1>
									Connect with us
								</h1>
								<h2>Your Gateway to Solutions</h2>
							</div>
						</div>
					</div>
                </div>
            </section>
            <section id="contact" className="contact  grey-bg ">
                <div className="">
                    {/* <h1 className="mb-3 page-title">Contact Us</h1> */}
                    {/* <div className="row mb-5 contact-us-text">
                        Ready to elevate your manufacturing operations? <br />
                        Contact us today to schedule a consultation and explore how we can
                        guide you towards manufacturing excellence.
                    </div> */}
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex align-items-stretch px-5 mt-4">
                            <div className="info mt-2 px-3 py-5">
                                <div className="address">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <h4>Address</h4>
                                    <p className='text'>
                                        #699 11th Cross, Padmanabhanagar <br />
                                        Bengaluru - 560 070 <br />
                                        Karnataka
                                    </p>
                                </div>
                                <hr/>

                                <div className="email">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h4>Email</h4>
                                    <p className='text'>
                                        info@sumadhwaconsultants.com <br />
                                    </p>
                                </div>
                                <hr/>

                                <div className="phone">
                                    <i className="fa-solid fa-phone"></i>
                                    <h4>Phone</h4>
                                    <p className='text'>
                                        98801 01449 <br />
                                        98450 06706
                                    </p>
                                </div>
                                {/* <hr/> */}

                                {/* <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> --> */}
                            </div>
                        </div>
                        <div className="tally-form col-lg-6 col-md-12 col-sm-12 my-4 bg-white">
                            <div className="row justify-content-center">
                                {/* <div className='col-lg-2 col-md-2'></div> */}
                                <div className="col-lg-10 col-md-10 col-sm-12 p-4">
                                    {loading ? spinner() :
                                        <div>
                                            <h5 className='my-4'>We would love to hear from you. Fill out the form below.</h5>
                                            {/* <p className='mb-4'>Glad you liked our services. We would love to hear from you!</p> */}
                                        </div>
                                    }
                                    <iframe
                                        data-tally-src="https://tally.so/embed/mYZE6N?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                        loading="lazy"
                                        width="100%"
                                        height="276"
                                        title="Contact form"
                                        onLoad={() => setLoading(false)}
                                    ></iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default ContactUs;
