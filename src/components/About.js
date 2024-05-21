import Header from "./Header";
import "../styles/style.css";
import Footer from "./Footer";
import Team from "./Team";
import Card from "./Card";
import HorizontalCard from "./HorizontalCard";

// images
import dataDrivenImg from "../images/about/data-driven-free.jpg";
import collaborationImg from "../images/about/collaboration-free.jpg";
import peopleCentricImg from "../images/about/people-centric-free.webp";
import techPartnerImg from "../images/about/tech-partnership-free.jpg";

function About() {
    return (
        <div>
            <Header active="about"></Header>
            <section className='hero about-bg'>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 order-1 order-lg-2 d-flex flex-column">
							<div>
								<h1>
									Our Story
								</h1>
								<h2>True to Profession</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
            <div className="about">
                <section id="who-we-are" className="who-we-are">
                    <div className="container bg-white">
                        <h1 className="mb-4 page-title">Who we are</h1>
                        <p>
                            Sumadhwa, drawing inspiration from Sanskrit's essence of
                            dedication, embodies our ethos at Sumadhwa Consultants. As a
                            united force, we're a team of seasoned professionals with over 25
                            years of collective experience in a leading automotive MNC,
                            specializing across Manufacturing Process, Production,
                            Maintenance, Quality, Automation, and EHS. Our proficiency extends
                            to leveraging the latest IT advancements, strategically optimizing
                            operational processes.
                        </p>
                        <p>
                            Our commitment lies in the depth of understanding the dynamic
                            challenges that the manufacturing industry faces. We tirelessly
                            strive to deliver tailored solutions that elevate efficiency,
                            drive cost reduction, and nurture sustainable growth. United by a
                            shared goal, we aspire to enable manufacturing excellence through
                            insightful consulting.
                        </p>
                        <p>
                            At Sumadhwa, each team member contributes a wealth of knowledge
                            and expertise, collectively forming a powerhouse of skills. This
                            collaborative strength allows us to navigate intricacies with
                            precision and offer holistic solutions. We recognize the
                            importance of addressing the unique needs of our clients, ensuring
                            that our consulting approach is not just insightful but also
                            results-driven.
                        </p>
                        {/* <p>
                            In essence, Sumadhwa Consultants stands as a beacon of dedication, experience, and innovation, ready to guide businesses towards a future of manufacturing excellence
                        </p> */}
                    </div>
                </section>

                <section id="guiding-lights" className="grey-bg">
                    <div className="container">
                        <div className="cards">
                            <div className="row center">
                                <div className="col d-flex flex-column justify-contents-center">
                                    <div className="content pt-4 pt-lg-0">
                                        <div className="section-title">
                                            <h4 className="mb-4">Our Guiding Lights</h4>
                                            <h1>
                                                We believe in achieving excellence through commitment
                                            </h1>
                                            <p></p>
                                        </div>
                                        <div className="row">
                                            <Card
                                                iconClass="fa-solid fa-bullseye"
                                                title="Mission"
                                                description="
                                                To address inefficiencies, foster continuous improvement, and promote resilience for lasting success in the global market."
                                            ></Card>
                                            <Card
                                                iconClass="fa-solid fa-eye"
                                                title="Vision"
                                                description="
                                                We envision a future where our manufacturing consultancy drives progress, efficiency, and excellence in every you touch
                                                "
                                            ></Card>
                                            <Card
                                                iconClass="fa-solid fa-handshake"
                                                title="Values"
                                                description="
                                                We are dedicated to excellence, intergrity and collaboration to ensure lasting relationships and drive success stories
                                                "
                                            ></Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="approach">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Approach</h2>
                        </div>
                        <HorizontalCard
                            title="Data Driven Decision Making"
                            imgSrc={dataDrivenImg}
                            description="Our strategies are backed by thorough data analysis, enabling informed decision-making at every level of your organization.
                    Our team turns complex information into easy-to-understand solutions, helping your business run smoother and make smart moves."
                        ></HorizontalCard>

                        <HorizontalCard
                            title="Collaborative Consulting"
                            imgSrc={collaborationImg}
                            description="We work closely with your team to understand your unique challenges and opportunities, ensuring that our solutions are aligned with your business goals and bring resilience in an increasingly competitive global market."
                        ></HorizontalCard>

                        <HorizontalCard
                            title="People Centric Solutions"
                            imgSrc={peopleCentricImg}
                            description="We believe in empowering your workforce. Our approach involves not just optimizing processes but also fostering a culture of continuous improvement among your teams and driving innovation and adaptability."
                        ></HorizontalCard>

                        <HorizontalCard
                            title="Technological Partnership"
                            imgSrc={techPartnerImg}
                            description="From automation to data analytics, we leverage the latest advancements to enhance your operations and drive sustained success partnering with technology solution providers."
                        ></HorizontalCard>
                    </div>
                </section>
            </div>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
}

export default About;
