import { Link } from 'react-router-dom';
import '../styles/style.css';

function Footer() {
	return (
		<footer className='footer'>
			<div className='row'>
				<div className='col-lg-4 col-md-4 col-sm-12'>
					<h4 className='mt-4'>About Us</h4>
					<p>
						Sumadhwa Consultants, a manufacturing consulting firm, is committed to fostering manufacturing excellence. Our mission is to empower organizations through dedicated expertise and a team of passionate professionals. We specialize in optimizing, innovating, and enhancing operational efficiency. By staying at the forefront of technology, we bring sustainable solutions to the table.
					</p>
				</div>
				<div className='col-lg-2 col-md-2 col-sm-12'>
					<h4 className='mt-4'>Quick Links</h4>
					<div>
						<Link className='footer-link' to={"/"}>Home</Link>				
						<Link className='footer-link' to={"/about"}>About</Link>	
						<Link className='footer-link' to={"/contact"}>Contact Us</Link>

					</div>
					
				</div>
				<div className='col-lg-2 col-md-2 col-sm-12'>
					<h4 className='mt-4'>Services</h4>
					<div>
						<Link className='footer-link' to={"/services/process-optimization"}>Process Optimization</Link>				
						<Link className='footer-link' to={"/services/technological-solutions"}>Technological Solutions</Link>	
						<Link className='footer-link' to={"/services/sustainability"}>Sustainability</Link>

					</div>
				</div>
				<div className='col-lg-4 col-md-4 col-sm-12'>
					<h4 className='mt-4'>
						Contact Information
					</h4>
					<p>
						Sumadhwa Consultants <br />
						# 699, 11 Cross, Padmanabhanagar <br />
						Bengaluru - 560 070 <br />
						Karnataka <br />
						India <br />
					</p>
					<p>

						Mobile: 9845006706 <br />
						Email: info@sumadhwaconsultants.com
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
