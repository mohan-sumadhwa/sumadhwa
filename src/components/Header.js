import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/style.css';

function Header({ active }) {

	const [showNavbar, setShowNavbar] = useState(false);

	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all)
		if (selectEl) {
			if (all) {
				selectEl.forEach(e => e.addEventListener(type, listener))
			} else {
				selectEl.addEventListener(type, listener)
			}
		}
	}

	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	useEffect(() => {

		on('click', '.mobile-nav-toggle', function(e) {
			console.log('Clicked');
			select('#navbar').classList.toggle('navbar-mobile')
			this.classList.toggle('bi-list')
			this.classList.toggle('bi-x')
			console.log('Done');
		  })
		
		on('click', '.navbar .dropdown > a', function (e) {
			// alert("Clicked on dropdown");
			if (select('#navbar').classList.contains('navbar-mobile')) {
				e.preventDefault()	
				this.nextElementSibling.classList.toggle('dropdown-active')
			}
		}, true);
	});


	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	}


	return (
		<header id="header" className="fixed-top d-flex align-items-center">
			<div className="container d-flex align-items-center">

				<div className="logo me-auto">
					{/* <!-- <h1><a href="index.html">Scaffold</a></h1> --> */}
					{/* <!-- Uncomment below if you prefer to use an image logo --> */}
					<Link to='/'>
						<div className="row justify-content-start">
							<div className='col-2'>
								<img src={logo} alt="" className="img-fluid" />

								{/* <!-- <h1><a href="index.html">Sumadhwa</a></h1> --> */}

							</div>
							<div className='col-10 logo-title'>
								<span>Sumadhwa Consultants</span>
							</div>

						</div>
					</Link>

				</div>

				<nav id="navbar" className={`navbar order-last order-lg-0 ${showNavbar && 'navbar-mobile'}`}>
					<ul>
						<li><Link className={"nav-link main-link  scrollto " + (active === "home" ? "active" : "")} to="/">Home</Link></li>
						<li><Link className={"nav-link main-link scrollto " + (active === "about" ? "active" : "")} to="/about">About Us</Link></li>

						<li>
							<li className="dropdown">
								<Link to="/services" className={"nav-link main-link scrollto " + (active === "services" ? "active" : "")}><span>Services</span> <i className="bi bi-chevron-down"></i></Link>
								<ul>
									<li>
										<Link className={"nav-link scrollto dropdown-link" + (active === "about" ? "active" : "")} to="/services/process-optimization">Process Optimization</Link>
									</li>
									<li>
										<Link className={"nav-link scrollto  dropdown-link" + (active === "team" ? "active" : "")} to="/services/technological-solutions">Technological Solutions</Link>
									</li>
									<li>
										<Link className={"nav-link scrollto  dropdown-link" + (active === "team" ? "active" : "")} to="/services/sustainability">Sustainability</Link>
									</li>
								</ul>
							</li>
						</li>
						<li>
							<Link className={"contact-link scrollto " + (active === "contact" ? "active" : "")} to="/contact">Contact Us</Link>
						</li>
					</ul>
					<i className={`bi ${showNavbar ? "bi-x" : "bi-list"} mobile-nav-toggle`} onClick={handleShowNavbar}></i>
				</nav>
			</div>
		</header>
	);
}

export default Header;
