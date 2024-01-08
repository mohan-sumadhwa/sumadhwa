import Header from './Header';
import '../styles/style.css';
import Footer from './Footer';

function Solutions() {
	return (
		<div>
			<Header active="solutions"></Header>
			<section className='hero solutions-bg'>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 order-1 order-lg-2 d-flex flex-column justify-content-center">
							<div>
								<h1>
									Maximizing Manufacturing For Lasting Excellence
								</h1>
								<h2>Optimize, Innovate, Sustain</h2>
								{/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='container'>
				<div className='solutions'>
					<div className='page-title'>
						<h1 className="">Our Solutions</h1>
					</div>					
					<div className='solution'>
						<h3>Business Process Optimisation</h3>
						<div className='solution-text'>
							<ol>
								<li className='subpoint mt-4 mb-4'>
									<h5>Process Optimisation and Efficiency Improvement</h5>
									<ul>
										<li>Streamlining production/assembly line processes for increased throughput</li>
										<li>Support special processes (Heat treatment, Surface treatment etc.) for precision component manufacturing</li>
										<li>Introducing new and troubleshooting existing processes</li>
									</ul>
								</li>
								<li className='subpoint mb-4'>
									<h5>Quality Management System</h5>
									<ul>
										<li>Designing and implementing robust quality control systems to ensure the production of high-quality components </li>
										<li> Conducting root cause analysis and implementing corrective actions for quality issues </li>
										<li>Developing customised training modules for specific manufacturing processes/technologies and implementation</li>
									</ul>
								</li>

								<li className='subpoint mb-4'>
									<h5>Lean Manufacturing</h5>
									<ul>
										<li>Unlock operational efficiency by eliminating waste, reducing costs, and enhancing overall productivity through our Lean Manufacturing solutions.</li>
									</ul>
								</li>

								<li className='subpoint mb-4'>
									<h5>Supply Chain Optimization</h5>
									<ul>
										<li>Transform your supply chain into a strategic asset, minimizing lead times, reducing costs, and improving overall logistics performance.</li>
									</ul>
								</li>

								<li className='subpoint mb-4'>
									<h5>Cost Reduction Strategies</h5>
									<ul>
										<li>Identifying opportunities for cost reduction without compromising product quality & implementing optimum solutions</li>
									</ul>
								</li>

								<li className='subpoint mb-4'>
									<h5>Six Sigma Implementation</h5>
									<ul>
										<li>Elevate the quality of your products and services with our Six Sigma methodologies, minimizing defects and maximizing customer satisfaction.</li>
									</ul>
								</li>
							</ol>
						</div>
					</div>
					<div className='solution'>
						<h3>Technological Solutions</h3>
						<div className='solution-text'>
							<ol>
								<li className='subpoint mt-4 mb-4'>
									<h5>Advanced Manufacturing Technologies</h5>
									<ul>
										<li>Integrating Industry 4.0 technologies, such as IoT, Robotics, AGVs, AI, to automate and enhance manufacturing processes</li>
										<li>Implementing smart manufacturing solutions for real-time monitoring and control</li>
									</ul>
								</li>
								<li className='subpoint mb-4'>
									<h5>Continuous Improvement Programs</h5>
									<ul>
										<li>Instill continuous improvement programs to foster a culture of excellence within your organization</li>
										<li>Embrace and drive innovation as a core component, ensuring your organization remains agile and adaptive to dynamic industry changes.</li>
										<li>Empower your team, enhancing adaptability and positioning your organization for success amidst evolving industry landscapes.</li>
									</ul>
								</li>
							</ol>
						</div>
					</div>
					<div className='solution'>
						<h3>Sustainability</h3>
						<div className='solution-text'>
							<ol>
								<li className='subpoint mt-4 mb-4'>
									<h5>Sustainability and Environmental Compliance</h5>
									<ul>
										<li>Assisting in the development of eco-friendly manufacturing processes</li>
										<li>Advising on compliance with environmental regulations and standards </li>
									</ul>
								</li>
								<li className='subpoint mb-4'>
									<h5>Energy efficiency</h5>
									<ul>
										<li>Implement energy efficiency practices such as Energy audit , Energy management system</li>
										<li>Energy efficient machinery & equipments, Renewable energy sources, thereby reducing operational costs and environmental impact</li>
									</ul>
								</li>
							</ol>
						</div>
					</div>
				</div>

			</div>
			<Footer></Footer>
		</div>
	);
}

export default Solutions;
