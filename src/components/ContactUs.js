import Header from './Header';
import '../styles/style.css';

function ContactUs() {
  return (
    <div className="landing-page-container">
        
        <Header active="contact"></Header>
        <section id="contact" className="contact">
      <div className="container mt-5 bg-white">
        <h1 className="mb-3">Contact Us</h1>
        <div className="row mb-5 contact-us-text">
          Ready to elevate your manufacturing operations? <br />
          Contact us today to schedule a consultation and explore how we can
          guide you towards manufacturing excellence.
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location</h4>
                <p>
                  #699 11th Cross, Padmanabhanagar <br />
                  Bengaluru - 560 070
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email</h4>
                <p>
                  nagarj.banaji2@gmail.com <br />
                  mohankellangere@gmail.com
                </p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Phone</h4>
                <p>
                  98801 01449 <br />
                  98450 06706
                </p>
              </div>

              {/* <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> --> */}
            </div>
          </div>
          <div className="tally-form col-lg-6 col-md-6 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <iframe
                  data-tally-src="https://tally.so/embed/3xJAXd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="276"
                  title="Contact form"
                ></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}

export default ContactUs;