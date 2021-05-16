import React from 'react';
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';

function scrollToTop() {
	window.scrollTo({
		top: 0,
	});
}

const Page_404 = () => {
	// let location = useLocation();

	scrollToTop();
	
	return (
		<div className="container">
			<div className="page404">
				<span className="page404__title">404</span>
				<span className="page404__message">Something went wrong, please try another page.</span>
				<span className="page404__link">Go to&nbsp;
					<Link to="./">homepage</Link>
				</span>
			</div>
		</div>
	)
}

export default Page_404;