import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../static/icons/menu.svg";
import { ReactComponent as Logo } from "../../static/icons/logo.svg";
import { ReactComponent as Headphones } from "../../static/icons/headphones.svg";
import { ReactComponent as Heart } from "../../static/icons/heart.svg";
import { ReactComponent as FlagUK } from "../../static/icons/flags/united-kingdom.svg";

const Header = () => {
	return (
		
			<header className="header">
				<div className="container">

					<div className="header__content">

						<div className="header__left">
							<div className="menu-icon">
								<MenuIcon />
							</div>
							<div className="logo">
								<Link to="/">
									<span className="logo-title">TripNest</span>
									<Logo className="logo-icon"/>
								</Link>
							</div>
						</div>
						{/* end left side of header */}

						<div className="nav">
							<div className="nav__item currency">
								<Link to="#">
									<FlagUK />
									<span>Euro</span>
								</Link>
							</div>
							<div className="nav__item customer-service">
								<Link to="/Customer_service">
									<Headphones />
									<span>Customer service</span>
								</Link>
							</div>
							<div className="nav__item saved-accomdations">
								<Link to="/saved_accomdations">
									<Heart />
									<span>Saved accomdations</span>
								</Link>
							</div>
							<div className="nav__item create-account">
								<Link to="/create_account" className="btn">Create account</Link>
							</div>
							<div className="nav__item login">
								<Link to="/log_In">
									<span>Log In</span>
								</Link>
							</div>
						</div>
						{/* end nav */}

					</div>
					{/* end header content */}


				</div>

			</header>
		
	);
};

export default Header;
