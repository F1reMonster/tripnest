import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Terms from "./pages/Terms";
import Rules from "./pages/Rules";
import Company_details from "./pages/Company_details";
import Page_404 from "./pages/Page_404";

function App() {

	return (
		<Router>
			<div className="app-wrapper">
				<Header />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/terms" component={Terms} />
					<Route path="/rules" component={Rules} />
					<Route path="/company_details" component={Company_details} />
					<Route path="*" component={Page_404} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
