import Footer from './Footer';
import Header from './Header';
import Card from './Card';
import '../styles/style.css';

function Home() {
	return (
		<div>
			<Header active="home"></Header>
			<section className='hero home-bg'>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 order-1 order-lg-2 d-flex flex-column justify-content-center">
							<div>
								<h1>
									Enabling manufacturing excellence through insightful consulting
								</h1>
								<h2>Preparing the patrons for the future...</h2>
								{/* <a href="#why-choose-us" className="btn-get-started scrollto">Get Started</a> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<main id="main">
				<section id="intro" className="section-bg">
					<div className="container">
						<div className="intro-text">
							We are eager to formally introduce our innovative IT-enabled
							professional services in Manufacturing Engineering Consulting, with
							a primary focus on “Manufacturing Excellence.”
						</div>
					</div>
				</section>

				<section id="why-choose-us" className="why-choose-us">
					<div className="container">
						<div className="cards">
							<div className="row center">
								<div className="col d-flex flex-column justify-contents-center">
									<div className="content pt-4 pt-lg-0">
										<div className="section-title">
											<h4 className="mb-4">Why choose us</h4>
											<h1>
												Our solutions are tailored to optimize your operations
											</h1>
											<p></p>
										</div>
										<div className="row">
											<Card
												iconClass="fa-solid fa-users"
												title="Expertise"
												description="
                        Professionals with 25+ years of hands-on experience in transforming manufacturing processes
                        "
											></Card>
											<Card
												iconClass="fa-solid fa-gear"
												title="Tailored Solutions"
												description="
                        Our services are customized to address the challenges of your industry and organization
						"
											></Card>
											<Card
												iconClass="fa-solid fa-lightbulb"
												title="Innovation"
												description="
                        We infuse cutting-edge tech to revolutionize every aspect of your manufacturing process
                        "
											></Card>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section id="services" className="cards section-bg">
					<div className="container">
						<div className="section-title">
							<h2>Our Services</h2>
							{/* <!-- <p>TODO</p> --> */}
						</div>
						<div className="row service">
							<div className="col-lg-6 col-md-12">
								<div className="services-img">
									<img src={require("../images/home/optimization.jpeg")} alt="" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12 description">
								<h2 className="mb-4">Process Optimization</h2>
								<p>
									We optimize production by streamlining processes for higher throughput, embrace lean manufacturing
									to minimize waste, and employ special treatments like heat and surface treatments for precision component
									manufacturing, introducing innovative approaches.
								</p>
							</div>
						</div>

						<div className="row service">

							<div className="col-lg-6 col-md-12 description">
								<h2 className="mb-4">Technogical Solutions</h2>
								<p>
									We seamlessly incorporate Industry 4.0 technologies, such as IoT and robotics, to automate and elevate manufacturing processes. Our smart manufacturing solutions ensure real-time monitoring and control, fostering efficiency and innovation in the rapidly evolving landscape of industrial automation.
								</p>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="services-img">
									<img src={require("../images/home/tech-solutions.jpg")} alt="" />
								</div>
							</div>
						</div>

						<div className="row service">
							<div className="col-lg-6 col-md-12">
								<div className="services-img">
									<img src={require("../images/home/sustainability.jpg")} alt="" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12 description">
								<h2 className="mb-4">Sustainability</h2>
								<p>
									We contribute to eco-friendly manufacturing, provide guidance on environmental compliance, and conduct EHS audits for certification, fostering sustainable practices and ensuring adherence to regulatory standards.
								</p>
							</div>
						</div>

					</div>
				</section>
				<Footer></Footer>
			</main>
		</div>
	);
}

export default Home;
