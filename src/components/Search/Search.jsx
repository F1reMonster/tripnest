import React from "react";
import { ReactComponent as Accomdation } from '../../static/icons/bed.svg';
import { ReactComponent as Suitcase } from '../../static/icons/suitcase.svg';
import { ReactComponent as SearchEarth } from '../../static/icons/earth.svg';
import { ReactComponent as SearchCalendar } from '../../static/icons/calendar.svg';
import { ReactComponent as SearchUser } from '../../static/icons/user.svg';

const Search = () => {

	return (
		<div className="search">
			<div className="search__wrapper">

				<div className="search__title">
					<span>Explore&nbsp;</span>the world today
				</div>

				<div className="search__tabs">
					<div className="search__tab-item search__tab-active">
						<Accomdation />
						<span>Accomdation</span>

					</div>

					<div className="search__tab-item">
						<Suitcase />
						<span className="normal">Travel inspiration</span>
						<span className="mobile">Inspiration</span>
					</div>
				</div>

				<form className="search__form" action="">

					<div className="search__form-field">
						<div>

							<input className="search__form-input" type="text" placeholder="Where to go?" />
							<SearchEarth className="search__icon" />
						</div>
					</div>

					<div className="search__form-field flex">
						<div className="w-1/2">
							<SearchCalendar className="search__icon" />
							<input className="search__form-input br-2" type="text" placeholder="Wed 16 July" />
						</div>
						<div className="w-1/2">
							<SearchCalendar className="search__icon" />
							<input className="search__form-input" type="text" placeholder="Wed 23 July" />
						</div>
					</div>


					<div className="flex d-flex-col">
						<div className="search__form-field mr-15">
							<div>
								<SearchUser className="search__icon" />
								<input className="search__form-input" type="text" placeholder="2 adults, 0 childern" />
							</div>
						</div>
						<button className="btn search__submit">Search</button>
					</div>

				</form>

			</div>

		</div>
	)
}

export default Search;
