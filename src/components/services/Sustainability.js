import React from "react"
import Header from "../Header";
import Card from "../Card";
import '../../styles/style.css';
import windmillImg from '../../images/services/windmill.jpg'
import solarPanelsImg from '../../images/services/solar-panels.jpg'
import ehsImg from '../../images/services/ehs.jpeg'
import Footer from "../Footer";

const Sustainability = () => {
    return (
        <div>
            <Header active="services"></Header>
            <section className='hero sustainability-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-1 order-lg-2 d-flex flex-column justify-content-center">
                            <div>
                                <h1>
                                    Greening Manufacturing
                                </h1>
                                <h2>
                                    Building Tomorrow, Today</h2>
                                {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="what-is-process-optimization" className="">

                <div className="container">
                    <h2 className="mb-4">Why sustainability? </h2>
                    <p>
                    Sustainability isn't a choice but a cornerstone for manufacturing firms. Today, 93% of CEOs view it as vital for future success (World Economic Forum). McKinsey reports that sustainable-focused companies outperform peers financially, with higher margins and stock returns. Beyond profits, sustainability boosts brand reputation, attracts talent, and fuels innovation. It's not just about ethics; it's about securing a competitive edge.
                    </p>
                </div>

            </section>

            <section id="sustainability-services" className="grey-bg">
                <div className="container">
                    <div className="cards">
                        <div className="row center">
                            <div className="col d-flex flex-column justify-contents-center">
                                <div className="content pt-4 pt-lg-0">
                                    <div className="section-title">
                                        {/* <h4 className="mb-4">Our Offerings</h4> */}
                                        <h1>
                                            Our offerings
                                        </h1>
                                        <p></p>
                                    </div>
                                    <div className="row">
                                        <Card
                                            imgSrc={windmillImg}
                                            // iconClass="fa-solid fa-handshake"
                                            title="Eco friendly processes
                                            "
                                            description="
                                            We collaborate closely to design and implement eco-friendly manufacturing processes, integrating sustainable practices from inception to execution. Through innovative technologies and strategic planning, we optimize resource utilization, minimize waste, and reduce environmental footprint, driving long-term sustainability and competitiveness in the industry.
                                                "
                                        ></Card>
                                        <Card
                                            imgSrc={solarPanelsImg}
                                            title="Environmental Compliance"
                                            description="
                                            We provide comprehensive guidance on navigating complex environmental regulations and standards, ensuring full compliance and mitigating risks. Our tailored approach includes thorough assessments, proactive strategies, and ongoing support to ensure adherence to evolving regulatory requirements, safeguarding your business reputation and fostering environmental stewardship.
                                            "
                                        ></Card>

                                        <Card
                                            imgSrc={ehsImg}
                                            title="EHS Audits"
                                            description="
                                            We conduct thorough EHS (Environment, Health, and Safety) audits to assess compliance and identify areas for improvement. Our expert guidance streamlines certification processes, ensuring adherence to industry standards and regulations. With our support, your business can achieve and maintain certifications, demonstrating commitment to excellence and sustainability.
                                            "
                                        ></Card>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Sustainability;