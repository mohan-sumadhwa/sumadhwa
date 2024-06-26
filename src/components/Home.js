import Footer from './Footer';
import Header from './Header';
import Card from './Card';
import '../styles/style.css';
import ContactUsBar from './ContactUsBar';
import MyButton from './MyButton';

function Home() {
	return (
		<div className='home-page'>
			<Header active="home"></Header>
			<section className='hero home-bg'>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 order-1 order-lg-2 d-flex flex-column justify-content-center">
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
				<section id="intro" className="">
					<div className="container center">
						<div className="intro-text mb-5">
							We are eager to formally introduce our innovative IT-enabled
							professional services in Manufacturing Engineering Consulting, with
							a primary focus on “Manufacturing Excellence.”

						</div>

						<MyButton link={"/about"} text={"Know More About Us"}></MyButton>

					</div>
				</section>

				<section id="why-choose-us" className="why-choose-us grey-bg">
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

				<section id="solutions" className="">
					<div className="container">
						<div className="section-title">
							<h2>Our Services</h2>
						</div>

						<div className='row service'>
							<div className='col-lg-7 col-md-7 col-sm-12'>
								<div className='row my-4'>
									<div className='col-2 service-icon'>
										<img alt='Process Optimization Gear Icon' src={require("../images/home/process-optimization-icon.png")}></img>
									</div>
									<div className='col'>
										<h4>Process Optimization</h4>
										<p className='mb-4'>We optimize production by streamlining processes for higher throughput, embrace lean manufacturing
									to minimize waste, and employ special treatments for precision component
									manufacturing.</p>
										<MyButton link={"/services/process-optimization"} text="Learn More"></MyButton>
									</div>
								</div>
								<hr></hr>
								<div className='row my-4'>
									<div className='col-2 service-icon'>
										<img alt='Technological Solutions Computer Icon' src={require("../images/home/technological-solutions-icon.png")}></img>
									</div>
									<div className='col'>
										<h4>Tecnological Solutions</h4>
										<p className='mb-4'>We seamlessly incorporate Industry 4.0 technologies, such as IoT and robotics, to automate and elevate manufacturing processes. </p>
										<MyButton link={"/services/technological-solutions"} text="Learn More"></MyButton>
									</div>
								</div>

								<hr></hr>
								<div className='row my-4'>
									<div className='col-2 service-icon'>
										<img alt='Sustainability Recycle Icon' src={require("../images/home/sustainability-icon.png")}></img>
									</div>
									<div className='col'>
										<h4>Sustainability</h4>
										<p className='mb-4'>We contribute to eco-friendly manufacturing, provide guidance on environmental compliance, and conduct EHS audits for certification.</p>
										<MyButton link={"/services/sustainability"} text="Learn More"></MyButton>
									</div>
								</div>

								<hr></hr>
							</div>

							<div className='solutions-img col-lg-5 col-md-5 col-sm-12'>
								<img alt='Man Working on a Laptop' src={require("../images/home/man-with-laptop.jpg")}></img>
							</div>

						</div>		

					</div>
				</section>
				<ContactUsBar></ContactUsBar>
				<Footer></Footer>
			</main>
		</div>
	);
}

export default Home;
