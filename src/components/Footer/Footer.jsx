import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from '../../static/icons/socials/facebook.svg';
import { ReactComponent as Instagram } from '../../static/icons/socials/instagram.svg';
import { ReactComponent as Tiktok } from '../../static/icons/socials/tik-tok.svg';
import { ReactComponent as Youtube } from '../../static/icons/socials/youtube.svg';
import { ReactComponent as Visa } from '../../static/icons/visa.svg';
import { ReactComponent as Mastercard } from '../../static/icons/master-card.svg';
import { ReactComponent as Amex } from '../../static/icons/amex.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">

					<div className="footer__about">
						<div className="footer__title">
							tripnest
						</div>
						<div className="footer__slogan">
							We make travel easy, explore the world today. We provide accomation easy, cheap and with great service.
						</div>
						<div className="footer__socials">
							<Link to="#" className="footer__socials-item">
								<Instagram className="social-icon" />
							</Link>
							<Link to="#" className="footer__socials-item">
								<Facebook className="social-icon" />
							</Link>
							<Link to="#" className="footer__socials-item">
								<Tiktok className="social-icon" />
							</Link>
							<Link to="#" className="footer__socials-item">
								<Youtube className="social-icon" />
							</Link>
						</div>
					</div>

					<ul className="footer__nav">
						<li className="footer__nav-item">
							<span>Popular destinations</span>
							<ul className="footer__subnav">
								<li className="footer__subnav-item">
									<Link to="/dubai">Dubai</Link>
								</li>
								<li className="footer__subnav-item">
									<Link to="/marbella">Marbella</Link>
								</li>
								<li className="footer__subnav-item">
									<Link to="/split">Split</Link>
								</li>
								<li className="footer__subnav-item">
									<Link to="/krakow">Krakow</Link>
								</li>
							</ul>
						</li>
						<li className="footer__nav-item">
							<span>Navigation</span>
							<ul className="footer__subnav">
								<li className="footer__subnav-item">Search accomdation</li>
								<li className="footer__subnav-item">Travel inspiration</li>
								<li className="footer__subnav-item">Saved accomdations</li>
								<li className="footer__subnav-item">Our blog</li>
							</ul>
						</li>
						<li className="footer__nav-item">
							<span>Customer service</span>
							<ul className="footer__subnav">
								<li className="footer__subnav-item">Submit ticket</li>
								<li className="footer__subnav-item">Guides and FAQ</li>
								<li className="footer__subnav-item">Contact information</li>
								<li className="footer__subnav-item">Cancel booking</li>
							</ul>
						</li>
					</ul>

				</div>
				<div className="footer__bottom">
					<div className="footer__bottom-text">
						<p>
							2021 © TripNest. All rights reserved.
						</p>
						<p>
							<Link to="/terms">
								Terms and conditions
							</Link>
						</p>
						<p>
							<Link to="/rules">
								Rules and policies
							</Link>

						</p>
						<p>
							<Link to="/company_details">
								Company details
							</Link>

						</p>

					</div>
					<div className="footer__payments">
						<div className="footer__payments-item">
							<img src="/icons/google-pay.png" alt="Google Pay" />
						</div>
						<div className="footer__payments-item">
							<img src="/icons/apple-pay.png" alt="Apple Pay" />
						</div>
						<div className="footer__payments-item">
							<Visa />
						</div>
						<div className="footer__payments-item">
							<Mastercard />
						</div>
						<div className="footer__payments-item">
							<Amex />
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}

export default Footer;

