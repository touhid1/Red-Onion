import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
	return (
		<footer className="rd-footer py-3">
			<div className="container">
				<div className="footer-links py-5">
					<div className="row">
						<div className="col-md-6">
							<div className="footer-logo mb-md-0 mb-4">
								<img src={logo} alt="logo light" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-6">
									<div className="links  text-left">
										<a href="/">About Online Food</a>
										<a href="/">Read our blog</a>
										<a href="/">Sign up to deliver</a>
										<a href="/">Add your restaurant</a>
									</div>
								</div>
								<div className="col-6">
									<div className="links  text-left">
										<a href="/">Get help</a>
										<a href="/">Read all cities</a>
										<a href="/">Restaurents near me</a>
										<a href="/">About Online Food</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyrights pt-5">
					<div className="row">
						<div className="col-md-5">
							<p className="copyright-info text-md-left text-center">
								&copy; 2020 | build with 
								<a href="https://www.linkedin.com/in/md-touhidul-islam-115505198/" target="_blank">
									Touhidul
								</a>
							</p>
						</div>
						<div className="col-md-7">
							<div className="links text-md-right text-center">
								<a href="/">Privacy Policy</a>
								<a href="/">Terms of Use</a>
								<a href="/">Pricing</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
