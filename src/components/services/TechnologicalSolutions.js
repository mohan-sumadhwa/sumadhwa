import React from "react"
import Header from "../Header";
import Card from "../Card";

import '../../styles/style.css';
import moneyCleanerImg from '../../images/services/money-cleaner.jpg';
import supplyChainImg from '../../images/services/port-supply-chain.jpg';
import metalMachineImg from '../../images/services/metal-machine.jpg';
import qmsImg from '../../images/services/qms.jpg';
import industry4Img from '../../images/services/industry-4.0.jpg'

import planningImg from '../../images/services/planning.jpg';
import measurementImg from '../../images/services/precision-manufacturing.jpg';
import Footer from "../Footer";


const TechnologicalSolutions = () => {
    return (
        <div>
            <Header active="services"></Header>
            <section className='hero technological-solutions-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-1 order-lg-2 d-flex flex-column justify-content-center">
                            <div>
                                <h1>
                                    Technogical Solutions
                                </h1>
                                <h2>
                                    Harnessing tomorrow's technology today.</h2>
                                {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-technological-soluitions" className="">

                <div className="container">
                    <h2 className="mb-4">Technological Solutions</h2>
                    <p>
                        Technological solutions in manufacturing are revolutionizing industries worldwide. With IoT adoption soaring, the global IoT in manufacturing market is projected to reach $136.8 billion by 2026. Robotics usage is also surging, with an estimated 2.7 million industrial robots operating by 2022. These innovations optimize processes, improve product quality, and reduce downtime. Embracing technology not only boosts efficiency but also enables manufacturers to meet evolving consumer demands, ensuring sustained growth and competitiveness in the digital age.
                    </p>
                </div>

            </section>

            <section id="technological-solutions-services" className="grey-bg">
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
                                            imgSrc={industry4Img}
                                            // iconClass="fa-solid fa-handshake"
                                            title="Industry 4.0"
                                            description="
                                            We help in integrating Industry 4.0 technologies, such as IoT, Robotics, AGVs, to automate and enhance manufacturing processes and implementing smart manufacturing solutions for real-time monitoring and control
                                                "
                                        ></Card>
                                        <Card
                                            imgSrc={planningImg}
                                            title="ERP Solutions"
                                            description="
                                            We offer ERP solutions integrating advanced technology, simplifying your operations. Our systems streamline processes, centralize data, and propel your business forward. Experience efficiency and growth in today's digital era.
                                                "
                                        ></Card>

                                        <Card
                                            imgSrc={measurementImg}
                                            title="Measurement and Diagnostics"
                                            description="
                                            We offer solutions in the areas of measurement and diagnostics, which play a crucial role in component manufacturing. 
                                            Precise measurements and diagnosing potential defects early ensures product quality and reliability.

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

export default TechnologicalSolutions;